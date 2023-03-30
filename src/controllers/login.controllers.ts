import { Request, Response } from "express";
import { ILogin } from "../interfaces/login.interface";
import createLoginService from "../services/login/createLogin.service";

const createLoginController = async (
	req: Request,
	res: Response
): Promise<Response> => {
	const loginData: ILogin = req.body;
	const token: string = await createLoginService(loginData);
	return res.status(200).json({ token: token });
};

export { createLoginController };
