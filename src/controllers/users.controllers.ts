import { Request, Response } from "express";
import { IUser, IUserReturn, IUserUpdate } from "../interfaces/users.interface";
import createUserService from "../services/users/createUser.service";
import retrieveUserService from "../services/users/retrieveUser.service";

const createUserController = async (
	req: Request,
	res: Response
): Promise<Response> => {
	const userData: IUser = req.body;
	const newUser: IUserReturn = await createUserService(userData);
	return res.status(201).json(newUser);
};

const retrieveUserController = async (
	req: Request,
	res: Response
): Promise<Response> => {
	const userId: string = req.params.id;
	const user: IUserReturn = await retrieveUserService(userId);
	return res.status(200).json(user);
};

export { createUserController, retrieveUserController };
