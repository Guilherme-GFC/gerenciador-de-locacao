import { Repository } from "typeorm";
import AppDataSource from "../../data-source";
import { Hour_Available } from "../../entities/hour_available.entity";
import { IHoursAvailableCreate } from "../../interfaces/hoursAvailable.interface";
import { hoursAvailableCreateSchema } from "../../schemas/hoursAvailable.schemas";

const createHoursAvailableService = async (
	hoursAvailableData: IHoursAvailableCreate
): Promise<IHoursAvailableCreate> => {
	const hoursAvailableRepository: Repository<Hour_Available> =
		AppDataSource.getRepository(Hour_Available);
	const newHoursAvailable = hoursAvailableRepository.create(hoursAvailableData);

	await hoursAvailableRepository.save(newHoursAvailable);

	const returnHoursAvailable =
		hoursAvailableCreateSchema.parse(newHoursAvailable);

	return returnHoursAvailable;
};

export default createHoursAvailableService;
