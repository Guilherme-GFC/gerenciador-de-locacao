import { Repository } from "typeorm";
import { Location } from "../../entities/location.entity";
import AppDataSource from "../../data-source";
import { AppError } from "../../errors";
import { ILocationReturn } from "../../interfaces/location.interface";
import { locationReturnSchema } from "../../schemas/location.schemas";

const restoreLocationService = async (
	locationId: string
): Promise<ILocationReturn> => {
	const locationRepository: Repository<Location> =
		AppDataSource.getRepository(Location);

	const restoreData = await locationRepository.restore({ id: locationId });

	if (restoreData.affected === 0) {
		throw new AppError("Location not found", 404);
	}

	const location = await locationRepository.findOne({
		where: {
			id: locationId,
		},
	});

	const returnLocation = locationReturnSchema.parse(location);

	return returnLocation;
};

export default restoreLocationService;
