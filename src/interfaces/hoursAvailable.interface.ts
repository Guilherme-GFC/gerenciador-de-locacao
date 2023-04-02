import { z } from "zod";
import {
	hoursAvailableCreateSchema,
	hoursAvailableReturnSchema,
	hoursAvailableManyReturnSchema,
} from "../schemas/hoursAvailable.schemas";

type IHoursAvailableCreate = z.infer<typeof hoursAvailableCreateSchema>;
type IHoursAvailableReturn = z.infer<typeof hoursAvailableReturnSchema>;
type IHoursAvailableManyReturn = z.infer<typeof hoursAvailableManyReturnSchema>;

export {
	IHoursAvailableCreate,
	IHoursAvailableReturn,
	IHoursAvailableManyReturn,
};
