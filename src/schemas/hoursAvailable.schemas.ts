import { z } from "zod";

const hoursAvailableCreateSchema = z.object({
	hour: z.string(),
});

const hoursAvailableReturnSchema = hoursAvailableCreateSchema.extend({
	id: z.string(),
	createdAt: z.date(),
	updatedAt: z.date(),
	deletedAt: z.date().nullable(),
});

const hoursAvailableManyReturnSchema = hoursAvailableReturnSchema.array();

export {
	hoursAvailableCreateSchema,
	hoursAvailableReturnSchema,
	hoursAvailableManyReturnSchema,
};
