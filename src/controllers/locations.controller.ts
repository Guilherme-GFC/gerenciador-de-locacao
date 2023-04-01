import { Request, Response } from "express";

// interfaces
import {
	ILocationCreate,
	ILocationUpdate,
} from "../interfaces/location.interface";

//services
import createLocationService from "../services/locations/createLocation.service";
import listLocationsService from "../services/locations/listLocations.service";
import retrieveLocationService from "../services/locations/retrieveLocation.service";
import updateLocationService from "../services/locations/updateLocation.service";
import deleteLocationService from "../services/locations/deleteLocation.service";

const createLocationController = async (
	req: Request,
	res: Response
): Promise<Response> => {
	const locationData: ILocationCreate = req.body;
	const newLocation = await createLocationService(locationData);
	return res.status(201).json(newLocation);
};

const listLocationsController = async (
	req: Request,
	res: Response
): Promise<Response> => {
	const isAdm: boolean = req.user?.isAdm || false;
	const locations = await listLocationsService(isAdm);
	return res.status(200).json(locations);
};

const retrieveLocationController = async (
	req: Request,
	res: Response
): Promise<Response> => {
	const locationId: string = req.params.id;
	const location = await retrieveLocationService(locationId);
	return res.status(200).json(location);
};

const updateLocationController = async (
	req: Request,
	res: Response
): Promise<Response> => {
	const locationId: string = req.params.id;
	const locationData: ILocationUpdate = req.body;
	const location = await updateLocationService(locationId, locationData);
	return res.status(200).json(location);
};

const deleteLocationController = async (
	req: Request,
	res: Response
): Promise<Response> => {
	const locationId: string = req.params.id;
	await deleteLocationService(locationId);
	return res.status(204).json();
};

export {
	createLocationController,
	listLocationsController,
	retrieveLocationController,
	updateLocationController,
	deleteLocationController,
};
