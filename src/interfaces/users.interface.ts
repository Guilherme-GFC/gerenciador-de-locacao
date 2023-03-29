import { z } from "zod";
import { DeepPartial } from "typeorm";
import {
	returnUserSchema,
	userSchema,
	manyReturnUserSchema,
} from "../schemas/users.schemas";

type IUser = z.infer<typeof userSchema>;
type IUserReturn = z.infer<typeof returnUserSchema>;
type IUserUpdate = DeepPartial<IUser>;
type IUsersReturn = z.infer<typeof manyReturnUserSchema>;

export { IUser, IUserReturn, IUserUpdate, IUsersReturn };
