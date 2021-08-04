import { APIGatewayProxyResult } from "aws-lambda";
import { StatusCode } from "./statusCodes";

export function generateResponse(
  statusCode: StatusCode,
  body?: Record<string, unknown>
): APIGatewayProxyResult {
  if (body)
    return {
      statusCode,
      body: JSON.stringify(body),
    };
  return {
    statusCode,
    body: "",
  };
}
