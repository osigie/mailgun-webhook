import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { connectToMongo } from "./connection";
import mailgunService from "./service/handlerService";

export const subscribe = (event: APIGatewayProxyEvent) => {
  mailgunService.subscribe(event);
};

export const publish = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  if (process.env.NODE_ENV !== "test") {
    await connectToMongo();
  }
  return await mailgunService.mailgun(event);
};
