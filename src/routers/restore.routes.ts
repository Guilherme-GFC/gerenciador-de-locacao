import { Router } from "express";

//controllers
import { restoreUserController } from "../controllers/restores.controllers";

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

export default restoreRoutes;
