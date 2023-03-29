import { z } from "zod";
import { DeepPartial } from "typeorm";
import {
	returnUserSchema,
	userSchema,
	userUpdateSchema,
} from "../schemas/users.schemas";

type IUser = z.infer<typeof userSchema>;
type IUserReturn = z.infer<typeof returnUserSchema>;
type IUserUpdate = DeepPartial<z.infer<typeof userUpdateSchema>>;

export { IUser, IUserReturn, IUserUpdate };
