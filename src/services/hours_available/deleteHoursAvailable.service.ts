import AppDataSource from "../../data-source";
import { Repository } from "typeorm";
import { Hour_Available } from "../../entities/hour_available.entity";

const deleteHoursAvailableService = async (
	hoursAvailableId: string
): Promise<void> => {
	const hoursAvailableRepository: Repository<Hour_Available> =
		AppDataSource.getRepository(Hour_Available);
	const hoursAvailable = await hoursAvailableRepository.findOne({
		where: {
			id: hoursAvailableId,
		},
	});

	hoursAvailableRepository.softRemove(hoursAvailable!);
};

export default deleteHoursAvailableService;
