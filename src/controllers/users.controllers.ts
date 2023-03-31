import { Request, Response } from "express";
import { IUser, IUserReturn, IUserUpdate } from "../interfaces/users.interface";

//services
import createUserService from "../services/users/createUser.service";
import listUsersService from "../services/users/listUsers.service";
import retrieveUserService from "../services/users/retrieveUser.service";
import updateUserService from "../services/users/updateUser.service";
import deleteUserService from "../services/users/deleteUser.service";
import restoreUserService from "../services/users/restoreUser.service";

const createUserController = async (
	req: Request,
	res: Response
): Promise<Response> => {
	const userData: IUser = req.body;
	const newUser: IUserReturn = await createUserService(userData);
	return res.status(201).json(newUser);
};

const listUsersController = async (
	req: Request,
	res: Response
): Promise<Response> => {
	const users = await listUsersService();
	return res.status(200).json(users);
};

const retrieveUserController = async (
	req: Request,
	res: Response
): Promise<Response> => {
	const userId: string = req.params.id;
	const user: IUserReturn = await retrieveUserService(userId);
	return res.status(200).json(user);
};

const updateUserController = async (
	req: Request,
	res: Response
): Promise<Response> => {
	const userId: string = req.params.id;
	const userData: IUserUpdate = req.body;
	const user: IUserReturn = await updateUserService(userId, userData);
	return res.status(200).json(user);
};

const deleteUserController = async (
	req: Request,
	res: Response
): Promise<Response> => {
	const userId: string = req.params.id;
	await deleteUserService(userId);
	return res.status(204).json();
};

const restoreUserController = async (
	req: Request,
	res: Response
): Promise<Response> => {
	const userEmail: string = req.body.email;
	const user = await restoreUserService(userEmail);
	return res.status(200).json(user);
};

export {
	createUserController,
	listUsersController,
	retrieveUserController,
	updateUserController,
	deleteUserController,
	restoreUserController,
};
