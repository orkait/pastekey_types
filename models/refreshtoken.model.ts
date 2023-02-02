import {
	createSchema,
	ExtractDoc,
	Type,
	typedModel,
	ExtractProps,
} from "ts-mongoose";

export const refreshTokenSchema = createSchema({
	_id: Type.objectId({
		auto: true,
	}),
	token: Type.string({
		required: true,
	}),
});

export const RefreshTokenModel = typedModel("refreshToken", refreshTokenSchema);
export type RefreshTokenDoc = ExtractDoc<typeof refreshTokenSchema>;
export type RefreshTokenProps = ExtractProps<typeof refreshTokenSchema>;
