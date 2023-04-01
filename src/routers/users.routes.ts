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
import ensureTokenValidMiddleware from "../middlewares/ensureTokenValid.middleware";
import ensureOwnerOrAdminMiddleware from "../middlewares/ensureOwnerOrAdmin.middleware";
import ensureAdminMiddleware from "../middlewares/ensureAdmin.middleware";

const userRoutes: Router = Router();

userRoutes.post(
	"",
	ensureDataIsValidMiddleware(userSchema),
	ensureEmailIsNotUsedMiddleware,
	createUserController
);

userRoutes.get(
	"",
	ensureTokenValidMiddleware,
	ensureAdminMiddleware,
	listUsersController
);

userRoutes.get(
	"/:id",
	ensureTokenValidMiddleware,
	ensureOwnerOrAdminMiddleware,
	ensureUserExistsMiddleware,
	retrieveUserController
);

userRoutes.patch(
	"/:id",
	ensureTokenValidMiddleware,
	ensureOwnerOrAdminMiddleware,
	ensureDataIsValidMiddleware(userUpdateSchema),
	ensureEmailIsNotUsedMiddleware,
	updateUserController
);

userRoutes.delete(
	"/:id",
	ensureTokenValidMiddleware,
	ensureUserExistsMiddleware,
	deleteUserController
);

export default userRoutes;
