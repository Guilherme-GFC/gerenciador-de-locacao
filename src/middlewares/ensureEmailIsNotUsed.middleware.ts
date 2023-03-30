import { Repository } from "typeorm";
import { User } from "../entities/user.entity";
import AppDataSource from "../data-source";
import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors";

const ensureEmailIsNotUsedMiddleware = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	const userRepository: Repository<User> = AppDataSource.getRepository(User);
	const findUser = await userRepository.findOne({
		where: {
			email: req.body.email,
		},
	});

	if (findUser) {
		throw new AppError("Email already used", 409);
	}

	return next();
};

export default ensureEmailIsNotUsedMiddleware;
