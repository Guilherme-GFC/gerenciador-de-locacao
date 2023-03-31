import { Request, Response, NextFunction } from "express";
import { AppError } from "../errors";

const ensureOwnerOrAdminMiddleware = (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	const reqId: string = req.params.id;
	const userId: string = req.user.id;
	const isAdm: boolean = req.user.isAdm;

	if (reqId !== userId && isAdm === false) {
		throw new AppError("Must be owner or admin to perform this action", 401);
	}

	return next();
};

export default ensureOwnerOrAdminMiddleware;
