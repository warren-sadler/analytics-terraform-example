const OK = 200 as const;
const CREATED = 201 as const;
const BAD_REQUEST = 400 as const;

export type StatusCode = typeof OK | typeof CREATED | typeof BAD_REQUEST;
