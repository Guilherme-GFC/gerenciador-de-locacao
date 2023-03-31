import { Request, Response, NextFunction } from "express";
import { AppError } from "../errors";

const ensureAdminMiddleware = (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	if (req.user.isAdm === false) {
		throw new AppError("Must be admin to perform this action", 401);
	}

	return next();
};

export default ensureAdminMiddleware;
