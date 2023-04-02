import { Request, Response } from "express";

// interfaces
import { IHoursAvailableCreate } from "../interfaces/hoursAvailable.interface";

// services
import createHoursAvailableService from "../services/hours_available/createHoursAvailable.service";
import listHoursAvailableService from "../services/hours_available/listHoursAvailable.service";
import retrieveHoursAvailableService from "../services/hours_available/retrieveHoursAvailable.service";
import deleteHoursAvailableService from "../services/hours_available/deleteHoursAvailable.service";

const createHoursAvailableController = async (
	req: Request,
	res: Response
): Promise<Response> => {
	const hoursAvailableData: IHoursAvailableCreate = req.body;
	const newHoursAvailable = await createHoursAvailableService(
		hoursAvailableData
	);
	return res.status(201).json(newHoursAvailable);
};

const listHoursAvailableController = async (
	req: Request,
	res: Response
): Promise<Response> => {
	const hoursAvailable = await listHoursAvailableService();
	return res.status(200).json(hoursAvailable);
};

const retrieveHoursAvailableController = async (
	req: Request,
	res: Response
): Promise<Response> => {
	const hoursAvailableId: string = req.params.id;
	const hoursAvailable = await retrieveHoursAvailableService(hoursAvailableId);
	return res.status(200).json(hoursAvailable);
};

const deleteHoursAvailableController = async (
	req: Request,
	res: Response
): Promise<Response> => {
	const hoursAvailableId: string = req.params.id;
	await deleteHoursAvailableService(hoursAvailableId);
	return res.status(204).json();
};

export {
	createHoursAvailableController,
	listHoursAvailableController,
	retrieveHoursAvailableController,
	deleteHoursAvailableController,
};
