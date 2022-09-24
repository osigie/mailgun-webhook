import { APIGatewayProxyEvent } from "aws-lambda";
import AWS from "aws-sdk";
import Mailgun from "../models/mailgun.model";
import { headers } from "../utils";
import dotenv from "dotenv";
import crypto from "crypto";

dotenv.config();

class mailgunService {
  static async mailgun(event: APIGatewayProxyEvent) {
    const sns = new AWS.SNS();
    const reqBody = JSON.stringify(event.body);
    const actualRequest = JSON.parse(reqBody);

    try {
      // Validate signature
      const value = actualRequest.signature.timestamp + actualRequest.signature.token;
      const hash = crypto
        .createHmac("sha256", process.env.API_KEY as string)
        .update(value)
        .digest("hex");
      if (hash !== actualRequest.signature.signature) {
        console.log("Invalid signature");
        return {
          statusCode: 400,
          headers,
          body: JSON.stringify({ message: "Invalid signature" }),
        };
      }

      //then i save to db
      await Mailgun.create({ eventData: actualRequest["event-data"], signature: actualRequest.signature });

      const snsObj = {
        Provider: "Mailgun",
        timestamp: actualRequest.signature.timestamp,
        type: actualRequest["event-data"].event,
      };

      const params = {
        Message: JSON.stringify(snsObj),
        TopicArn: "arn:aws:sns:us-east-1:922327904685:mailgun2",
      };

      // publish to sns
      sns.publish(params, (error, data) => {
        if (error) {
          console.log("error", error);
        } else {
          console.log("success", data);
        }
      });

      //return success
      return {
        statusCode: 201,
        headers,
        body: JSON.stringify(snsObj),
      };
    } catch (error) {
      return {
        statusCode: 502,
        headers,
        body: JSON.stringify({ message: "internal server error" }),
      };
    }
  }

  static subscribe(event: APIGatewayProxyEvent) {
    const sns = new AWS.SNS();
    const reqBody = JSON.stringify(event.body);
    const actualRequest = JSON.parse(reqBody);

    const params = {
      Protocol: actualRequest.Protocol,
      TopicArn: actualRequest.TopicArn,
      Endpoint: actualRequest.Endpoint,
    };
    // subscribe to sns
    sns.subscribe(params, (error, data) => {
      if (error) {
        console.log("error", error);
      } else {
        console.log("success", data);
      }
    });
  }
}

export default mailgunService;
