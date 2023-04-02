import { Router } from "express";
import { locationHourCreateSchema } from "../schemas/location.schemas";

// controllers
import {
	createLocationController,
	listLocationsController,
	retrieveLocationController,
	updateLocationController,
	deleteLocationController,
	createLocationHourController,
	removeLocationHourController,
} from "../controllers/locations.controller";

// middlewares
import ensureTokenValidMiddleware from "../middlewares/ensureTokenValid.middleware";
import verifyTokenExistsMiddleware from "../middlewares/verifyTokenExists.middleware";
import ensureAdminMiddleware from "../middlewares/ensureAdmin.middleware";
import ensureDataIsValidMiddleware from "../middlewares/ensureDataIsValid.middleware";

const locationRoutes: Router = Router();

locationRoutes.post("", ensureTokenValidMiddleware, createLocationController);
locationRoutes.post(
	"/:id/hours",
	ensureTokenValidMiddleware,
	ensureDataIsValidMiddleware(locationHourCreateSchema),
	createLocationHourController
);
locationRoutes.post(
	"/:id/hours/:hourId/remove",
	ensureTokenValidMiddleware,
	removeLocationHourController
);
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
