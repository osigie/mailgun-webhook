# Using Mailgun webhook to get information on mail sent through AWS API gateway, and proxied to lambda which send a sns and the raw event is saved to mongoDB.

# `Packages`

[Node v18.x](https://reactjs.org/)<br>

[serverless 2.52.1](https://www.serverless.com/): Develop, deploy, troubleshoot and secure your serverless applications with radically less overhead and cost by using the Serverless Framework. The Serverless Framework consists of an open source CLI and a hosted dashboard. Together, they provide you with full serverless application lifecycle management. <br>

[TypeScript 4.3.5](https://www.typescriptlang.org/): Adds types to JavaScript to help you speed up the development by catching errors before you even run the JavaScript code.<br>

[aws-lambda 1.0.6](https://www.npmjs.com/package/aws-lambda/): AWS Lambda is a serverless, event-driven compute service that lets you run code for virtually any type of application or backend service without provisioning or managing servers. You can trigger Lambda from over 200 AWS services and software as a service (SaaS) applications, and only pay for what you use.<br>

[aws-sdk 2.953.0](https://www.npmjs.com/package/aws-sdk): The AWS SDK for JavaScript simpliﬁes use of AWS Services by providing a set of libraries that are consistent and familiar for JavaScript developers. It provides support for API lifecycle consideration such as credential management, retries, data marshaling, serialization, and deserialization.<br>

[jest 29.0.3](https://jestjs.io/): Jest is a JavaScript testing framework designed to ensure correctness of any JavaScript codebase. It allows you to write tests with an approachable, familiar and feature-rich API that gives you results quickly..<br>

[mongoose 6.6.1](https://mongoosejs.com/): Mongoose provides a straight-forward, schema-based solution to model your application data. It includes built-in type casting, validation, query building, business logic hooks and more, out of the box.<br>

[mongodb-memory-server 8.9.2](https://www.npmjs.com/package/mongodb-memory-server/): It is a package that spins up a real MongoDB server. It enables us to start a mongod process that stores data in memory. In-memory databases are spun up, ran, and closed in the application's main memory itself.<br>

## Installation

Run:

```bash
npm install
```

or

```
yarn install
```

## Deployment

Run:

```bash
serverless deploy
```
