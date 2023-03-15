import { categoryArray, privacyArray, adTypeArray, statusArray } from "./default";

// export enums
export type categoryType = typeof categoryArray[number];
export type privacyType = typeof privacyArray[number];
export type adType = typeof adTypeArray[number];
export type statusType = typeof statusArray[number];

// export types
export type { CounterDoc, CounterProps } from "./models/counter.model";
export type { PasteDoc, PasteProps } from "./models/paste.model";
export type { UserDoc, UserProps } from "./models/user.model";
export type { TempUserDoc, TempUserProps } from "./models/tempuser.model";
