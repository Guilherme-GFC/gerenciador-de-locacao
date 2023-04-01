import AppDataSource from "../../data-source";
import { Repository } from "typeorm";
import { Location } from "../../entities/location.entity";

const deleteLocationService = async (locationId: string): Promise<void> => {
	const locationRepository: Repository<Location> =
		AppDataSource.getRepository(Location);
	const location = await locationRepository.findOne({
		where: {
			id: locationId,
		},
	});

	locationRepository.softRemove(location!);
};

export default deleteLocationService;
