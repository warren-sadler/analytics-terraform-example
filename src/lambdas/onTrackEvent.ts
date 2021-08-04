import { S3 } from "aws-sdk";
import { APIGatewayProxyHandler } from "aws-lambda";
import { generateResponse } from "@libs/http/response";
import { getConfig } from "@libs/configuration";

const s3 = new S3();

export const handler: APIGatewayProxyHandler = async (event) => {
  const { BUCKET_NAME: Bucket } = getConfig();
  if (!event.body) return generateResponse(400);
  try {
    await s3
      .putObject({
        Key: "url/eventName/timestamp",
        Bucket,
        Body: event.body,
      })
      .promise();
    return generateResponse(200);
  } catch (error) {
    return generateResponse(400);
  }
};
