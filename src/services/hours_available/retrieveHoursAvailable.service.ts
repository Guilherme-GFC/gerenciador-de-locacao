import AppDataSource from "../../data-source";
import { Repository } from "typeorm";
import { Hour_Available } from "../../entities/hour_available.entity";
import { IHoursAvailableReturn } from "../../interfaces/hoursAvailable.interface";
import { hoursAvailableReturnSchema } from "../../schemas/hoursAvailable.schemas";

const retrieveHoursAvailableService = async (
	hoursAvailableId: string
): Promise<IHoursAvailableReturn> => {
	const hoursAvailableRepository: Repository<Hour_Available> =
		AppDataSource.getRepository(Hour_Available);
	const hoursAvailable = await hoursAvailableRepository.findOne({
		where: {
			id: hoursAvailableId,
		},
	});

	const returnHoursAvailable = hoursAvailableReturnSchema.parse(hoursAvailable);

	return returnHoursAvailable;
};

export default retrieveHoursAvailableService;
