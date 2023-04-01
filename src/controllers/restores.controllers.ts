import { Request, Response } from "express";

// services
import restoreUserService from "../services/restores/restoreUser.service";
import restoreLocationService from "../services/restores/restoreLocation.service";

const restoreUserController = async (
	req: Request,
	res: Response
): Promise<Response> => {
	const userEmail: string = req.body.email;
	const userId: string = req.params.id;
	const user = await restoreUserService(userEmail);
	return res.status(200).json(user);
};

const restoreLocationController = async (
	req: Request,
	res: Response
): Promise<Response> => {
	const locationId: string = req.params.id;
	const location = await restoreLocationService(locationId);
	return res.status(200).json(location);
};

export { restoreUserController, restoreLocationController };
