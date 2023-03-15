import {
	createSchema,
	Type,
	typedModel,
	ExtractDoc,
	ExtractProps,
} from "ts-mongoose";

const today = new Date().toISOString().slice(0, 10);

const viewSchema = createSchema(
	{
		[today]: Type.number({ required: true, default: 0 }),
	},
	{
		_id: false,
	}
);

export const counterSchema = createSchema({
	_id: Type.objectId({
		auto: true,
	}),
	service: Type.string({ required: true, enum: ["paste", "file"] }),
	views: Type.object({ required: true }).of(viewSchema),
	counter: Type.number({
		required: true,
		default: 0,
	}),
});

export const CounterModel = typedModel("counter", counterSchema);
export type CounterDoc = ExtractDoc<typeof counterSchema>;
export type CounterProps = ExtractProps<typeof counterSchema>;
