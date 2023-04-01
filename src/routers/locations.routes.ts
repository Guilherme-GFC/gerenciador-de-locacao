import { Router } from "express";

// controllers
import {
	createLocationController,
	listLocationsController,
	retrieveLocationController,
	updateLocationController,
	deleteLocationController,
} from "../controllers/locations.controller";

// middlewares
import ensureTokenValidMiddleware from "../middlewares/ensureTokenValid.middleware";
import verifyTokenExistsMiddleware from "../middlewares/verifyTokenExists.middleware";
import ensureAdminMiddleware from "../middlewares/ensureAdmin.middleware";

const locationRoutes: Router = Router();

locationRoutes.post("", ensureTokenValidMiddleware, createLocationController);
locationRoutes.get("", verifyTokenExistsMiddleware, listLocationsController);
locationRoutes.get("/:id", retrieveLocationController);
locationRoutes.patch(
	"/:id",
	ensureTokenValidMiddleware,
	ensureAdminMiddleware,
	updateLocationController
);
locationRoutes.delete(
	"/:id",
	ensureTokenValidMiddleware,
	ensureAdminMiddleware,
	deleteLocationController
);

export default locationRoutes;
