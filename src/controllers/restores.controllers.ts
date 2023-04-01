import { Request, Response } from "express";
import restoreUserService from "../services/restores/restoreUser.service";

const restoreUserController = async (
	req: Request,
	res: Response
): Promise<Response> => {
	const userEmail: string = req.body.email;
	const userId: string = req.params.id;
	const user = await restoreUserService(userEmail);
	return res.status(200).json(user);
};

export { restoreUserController };
