import AppDataSource from "../../data-source";
import { Repository } from "typeorm";
import { Location } from "../../entities/location.entity";
import { ILocationReturn } from "../../interfaces/location.interface";
import { locationReturnSchema } from "../../schemas/location.schemas";

const retrieveLocationService = async (
	locationId: string
): Promise<ILocationReturn> => {
	const locationRepository: Repository<Location> =
		AppDataSource.getRepository(Location);
	const location = await locationRepository.findOne({
		where: {
			id: locationId,
		},
	});

	const returnLocation = locationReturnSchema.parse(location);

	return returnLocation;
};

export default retrieveLocationService;
