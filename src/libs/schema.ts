import * as z from "zod";

const eventSchema = z.object({
  eventName: z.string(),
  websiteURL: z.string(),
  properties: z.record(z.string()),
});

export type Event = z.infer<typeof eventSchema>;

export const parseAsEvent = (data: unknown): Event => eventSchema.parse(data);
