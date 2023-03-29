import { Router } from "express";
import {
	createUserController,
	retrieveUserController,
} from "../controllers/users.controllers";
import ensureDataIsValidMiddleware from "../middlewares/ensureDataIsValid.middleware";
import ensureUserExistsMiddleware from "../middlewares/ensureUserExists.middleware";
import { userSchema } from "../schemas/users.schemas";

const userRoutes: Router = Router();

userRoutes.post(
	"",
	ensureDataIsValidMiddleware(userSchema),
	createUserController
);

userRoutes.get("/:id", ensureUserExistsMiddleware, retrieveUserController);

export default userRoutes;
