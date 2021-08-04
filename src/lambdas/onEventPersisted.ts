import { getConfig } from "@libs/configuration";
import { getMixpanelReporter } from "@libs/reporter";
import { parseAsEvent } from "@libs/schema";
import { S3Event } from "aws-lambda";
import { S3 } from "aws-sdk";

const s3 = new S3();
const reporter = getMixpanelReporter();

export async function handler(event: S3Event) {
  const { BUCKET_NAME } = getConfig();
  return Promise.all(
    event.Records.map(async (record) => {
      try {
        const result = await s3
          .getObject({
            Bucket: BUCKET_NAME,
            Key: record.s3.object.key,
          })
          .promise();
        const event = parseAsEvent(result.Body);
        reporter.report(event);
      } catch (error) {}
    })
  );
}
