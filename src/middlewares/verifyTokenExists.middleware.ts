import { Request, Response, NextFunction } from "express";
import ensureTokenValidMiddleware from "./ensureTokenValid.middleware";

const verifyTokenExistsMiddleware = (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	if (req.headers.authorization) {
		return ensureTokenValidMiddleware(req, res, next);
	}

	return next();
};

export default verifyTokenExistsMiddleware;
