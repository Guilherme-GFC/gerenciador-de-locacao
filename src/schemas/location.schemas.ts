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

const locationHourCreateSchema = z.object({
	hour: z
		.string()
		.regex(
			new RegExp("^([0-1]?[0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]$"),
			"Invalid format, must be HH:MM:SS"
		),
});

const hourReturnSchema = locationHourCreateSchema.extend({
	id: z.string(),
	createdAt: z.date(),
	updatedAt: z.date(),
	deletedAt: z.date().nullable(),
});

const locationAndHourReturnSchema = locationReturnSchema.extend({
	hours: hourReturnSchema
		.omit({
			updatedAt: true,
			createdAt: true,
			deletedAt: true,
		})
		.array(),
});

export {
	locationCreateSchema,
	locationUpdateSchema,
	locationReturnSchema,
	locationManyReturnSchema,
	locationHourCreateSchema,
	hourReturnSchema,
	locationAndHourReturnSchema,
};
