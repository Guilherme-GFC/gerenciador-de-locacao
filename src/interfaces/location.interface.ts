import { z } from "zod";
import { DeepPartial } from "typeorm/common/DeepPartial";
import {
	locationCreateSchema,
	locationReturnSchema,
	locationManyReturnSchema,
	locationHourCreateSchema,
	locationAndHourReturnSchema,
} from "../schemas/location.schemas";

type ILocationCreate = z.infer<typeof locationCreateSchema>;
type ILocationReturn = z.infer<typeof locationReturnSchema>;
type ILocationUpdate = DeepPartial<ILocationCreate>;
type ILocationsReturn = z.infer<typeof locationManyReturnSchema>;
type ILocationHourCreate = z.infer<typeof locationHourCreateSchema>;
type ILocationHourReturn = z.infer<typeof locationAndHourReturnSchema>;

export {
	ILocationHourReturn,
	ILocationCreate,
	ILocationReturn,
	ILocationUpdate,
	ILocationsReturn,
	ILocationHourCreate,
};
