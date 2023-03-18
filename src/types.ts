import { categoryArray, privacyArray, adTypeArray, statusArray } from "./default";

// export enums
export type categoryType = typeof categoryArray[number];
export type privacyType = typeof privacyArray[number];
export type adType = typeof adTypeArray[number];
export type statusType = typeof statusArray[number];