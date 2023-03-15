export const categoryEnum = {
    general: "general",
    coding: "coding",
    document: "document",
    secret: "secret",
    other: "other",
} as const;

export const statusEnum = {
    active: "active",
    inactive: "inactive",
    banned: "banned",
    expired: "expired",
    deleted: "deleted",
} as const;

export const privacyEnum = {
    public: "public",
    private: "private",
    unlisted: "unlisted",
} as const;

export const adTypeEnum = {
    low: "low",
    medium: "medium",
    high: "high",
};


// enum to array utility
export function extractKeysReadonly<T>(
    enumObject: T extends Record<keyof T, string> ? T : never
): ReadonlyArray<keyof T> {
    return Object.keys(enumObject) as Array<keyof T>;
}

// export arrays
export const categoryArray = extractKeysReadonly(categoryEnum);
export const privacyArray = extractKeysReadonly(privacyEnum);
export const adTypeArray = extractKeysReadonly(adTypeEnum);
export const statusArray = extractKeysReadonly(statusEnum);