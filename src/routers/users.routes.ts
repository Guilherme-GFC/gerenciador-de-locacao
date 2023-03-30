import { Router } from "express";

//schemas
import { userSchema, userUpdateSchema } from "../schemas/users.schemas";

//controllers
import {
	createUserController,
	retrieveUserController,
	updateUserController,
	deleteUserController,
	listUsersController,
} from "../controllers/users.controllers";

// middlewares
import ensureDataIsValidMiddleware from "../middlewares/ensureDataIsValid.middleware";
import ensureUserExistsMiddleware from "../middlewares/ensureUserExists.middleware";
import ensureEmailIsNotUsedMiddleware from "../middlewares/ensureEmailIsNotUsed.middleware";

const userRoutes: Router = Router();

userRoutes.post(
	"",
	ensureDataIsValidMiddleware(userSchema),
	ensureEmailIsNotUsedMiddleware,
	createUserController
);

userRoutes.get("", listUsersController);
userRoutes.get("/:id", ensureUserExistsMiddleware, retrieveUserController);
userRoutes.patch(
	"/:id",
	ensureUserExistsMiddleware,
	ensureDataIsValidMiddleware(userUpdateSchema),
	updateUserController
);
userRoutes.delete("/:id", ensureUserExistsMiddleware, deleteUserController);

export default userRoutes;
