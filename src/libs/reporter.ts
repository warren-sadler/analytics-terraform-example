import Mixpanel from "mixpanel";
import { getConfig } from "./configuration";
import { Event } from "./schema";

export interface Reporter {
  report(event: Event): Promise<void>;
}

export const getMixpanelReporter = (): Reporter => {
  const { MIXPANEL_TOKEN } = getConfig();
  const mixpanel = Mixpanel.init(MIXPANEL_TOKEN);
  const MixPanelReporter: Reporter = {
    async report(event) {
      mixpanel.track(event.eventName, {
        siteURL: event.websiteURL,
        ...event.properties,
      });
    },
  };
  return MixPanelReporter;
};
