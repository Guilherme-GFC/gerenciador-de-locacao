import { Repository } from "typeorm";
import AppDataSource from "../../data-source";
import { Location } from "../../entities/location.entity";
import {
	ILocationCreate,
	ILocationReturn,
} from "../../interfaces/location.interface";
import { locationReturnSchema } from "../../schemas/location.schemas";

const createLocationService = async (
	locationData: ILocationCreate
): Promise<ILocationReturn> => {
	const locationRepository: Repository<Location> =
		AppDataSource.getRepository(Location);
	const newLocation = locationRepository.create(locationData);

	await locationRepository.save(newLocation);

	const returnLocation = locationReturnSchema.parse(newLocation);

	return returnLocation;
};

export default createLocationService;
