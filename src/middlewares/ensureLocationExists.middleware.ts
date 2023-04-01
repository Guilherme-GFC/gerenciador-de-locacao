import { Request, Response, NextFunction } from "express";
import AppDataSource from "../data-source";
import { Repository } from "typeorm";
import { Location } from "../entities/location.entity";
import { AppError } from "../errors";

const ensureLocationExistsMiddleware = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	const locationRepository: Repository<Location> =
		AppDataSource.getRepository(Location);
	const findLocation = await locationRepository.findOne({
		where: {
			id: req.params.id,
		},
	});

	if (!findLocation) {
		throw new AppError("Location not found", 404);
	}

	return next();
};
