import { z } from "zod";

const locationCreateSchema = z.object({
	name: z.string().max(27),
	address: z.string().max(47),
	number: z.string().max(5).optional().nullable(),
});

const locationUpdateSchema = locationCreateSchema.partial();

const locationReturnSchema = locationCreateSchema.extend({
	id: z.string(),
	createdAt: z.date(),
	updatedAt: z.date(),
	deletedAt: z.date().nullable(),
});

const locationManyReturnSchema = locationReturnSchema.array();

export {
	locationCreateSchema,
	locationUpdateSchema,
	locationReturnSchema,
	locationManyReturnSchema,
};
