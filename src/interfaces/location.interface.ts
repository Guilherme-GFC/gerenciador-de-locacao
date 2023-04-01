import { z } from "zod";
import { DeepPartial } from "typeorm/common/DeepPartial";
import {
	locationCreateSchema,
	locationReturnSchema,
	locationManyReturnSchema,
} from "../schemas/location.schemas";

type ILocationCreate = z.infer<typeof locationCreateSchema>;
type ILocationReturn = z.infer<typeof locationReturnSchema>;
type ILocationUpdate = DeepPartial<ILocationCreate>;
type ILocationsReturn = z.infer<typeof locationManyReturnSchema>;

export { ILocationCreate, ILocationReturn, ILocationUpdate, ILocationsReturn };
