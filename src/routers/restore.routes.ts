import { Router } from "express";

//controllers
import {
	restoreLocationController,
	restoreUserController,
} from "../controllers/restores.controllers";

//middlewares
import ensureTokenValidMiddleware from "../middlewares/ensureTokenValid.middleware";
import ensureAdminMiddleware from "../middlewares/ensureAdmin.middleware";

const restoreRoutes: Router = Router();

restoreRoutes.patch(
	"/users",
	ensureTokenValidMiddleware,
	ensureAdminMiddleware,
	restoreUserController
);

restoreRoutes.patch(
	"/locations/:id",
	ensureTokenValidMiddleware,
	ensureAdminMiddleware,
	restoreLocationController
);

export default restoreRoutes;
