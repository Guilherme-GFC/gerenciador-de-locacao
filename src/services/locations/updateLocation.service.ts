import { Repository } from "typeorm";
import AppDataSource from "../../data-source";
import { Location } from "../../entities/location.entity";
import {
	ILocationUpdate,
	ILocationReturn,
} from "../../interfaces/location.interface";
import { locationReturnSchema } from "../../schemas/location.schemas";

const updateLocationService = async (
	locationId: string,
	locationNewData: ILocationUpdate
): Promise<ILocationReturn> => {
	const locationRepository: Repository<Location> =
		AppDataSource.getRepository(Location);

	const location = await locationRepository.findOne({
		where: {
			id: locationId,
		},
	});

	const updatedLocation = locationRepository.create({
		...location,
		...locationNewData,
	});

	await locationRepository.save(updatedLocation);

	const returnLocation = locationReturnSchema.parse(updatedLocation);

	return returnLocation;
};

export default updateLocationService;
