const categoryEnum = {
	general: "general",
	coding: "coding",
	document: "document",
	secret: "secret",
	other: "other",
} as const;

const statusEnum = {
	active: "active",
	inactive: "inactive",
	banned: "banned",
	expired: "expired",
	deleted: "deleted",
} as const;

const privacyEnum = {
	public: "public",
	private: "private",
	unlisted: "unlisted",
} as const;

const adTypeEnum = {
	low: "low",
	medium: "medium",
	high: "high",
};

export function extractKeysReadonly<T>(
	enumObject: T extends Record<keyof T, string> ? T : never
): ReadonlyArray<keyof T> {
	return Object.keys(enumObject) as Array<keyof T>;
}

export const categoryArray = extractKeysReadonly(categoryEnum);
export const privacyArray = extractKeysReadonly(privacyEnum);
export const adTypeArray = extractKeysReadonly(adTypeEnum);
export const statusArray = extractKeysReadonly(statusEnum);

export type categoryType = typeof categoryArray[number];
export type privacyType = typeof privacyArray[number];
export type adType = typeof adTypeArray[number];
export type statusType = typeof statusArray[number];

// export types
export type { CounterDoc, CounterProps } from "./models/counter.model";
export type { PasteDoc, PasteProps } from "./models/paste.model";
export type { UserDoc, UserProps } from "./models/user.model";
export type { TempUserDoc, TempUserProps } from "./models/tempuser.model";
