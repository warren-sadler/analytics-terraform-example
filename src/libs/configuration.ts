import { get } from "env-var";

const BUCKET_NAME = "BUCKET_NAME" as const;
const MIXPANEL_TOKEN = "MIXPANEL_TOKEN" as const;

interface Configuration {
  BUCKET_NAME: string;
  MIXPANEL_TOKEN: string;
}

export const getConfig = (): Configuration => {
  return {
    [BUCKET_NAME]: get(BUCKET_NAME).required().asString(),
    [MIXPANEL_TOKEN]: get(MIXPANEL_TOKEN).required().asString(),
  };
};
