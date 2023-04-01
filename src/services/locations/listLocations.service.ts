import AppDataSource from "../../data-source";
import { Repository } from "typeorm";
import { Location } from "../../entities/location.entity";
import { ILocationsReturn } from "../../interfaces/location.interface";
import { locationManyReturnSchema } from "../../schemas/location.schemas";

const listLocationsService = async (
	isAdm: boolean
): Promise<ILocationsReturn> => {
	const locationRepository: Repository<Location> =
		AppDataSource.getRepository(Location);
	const locations = await locationRepository.find({ withDeleted: isAdm });

	const locationsReturn = locationManyReturnSchema.parse(locations);

	return locationsReturn;
};

export default listLocationsService;
