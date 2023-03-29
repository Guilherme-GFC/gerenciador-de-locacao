import { z } from "zod";

const userSchema = z.object({
	name: z.string().max(47),
	email: z.string().email().max(47),
	password: z.string().max(20),
	isAdm: z.boolean().default(false),
});

const userUpdateSchema = userSchema.omit({ isAdm: true }).partial();

const returnUserSchema = userSchema
	.extend({
		id: z.string(),
		createdAt: z.date(),
		updatedAt: z.date(),
		deletedAt: z.date().nullable(),
	})
	.omit({ password: true });

const manyReturnUserSchema = returnUserSchema.array();

export { userSchema, userUpdateSchema, returnUserSchema, manyReturnUserSchema };
