import AppDataSource from "../../data-source";
import { Repository } from "typeorm";
import { Hour_Available } from "../../entities/hour_available.entity";
import { IHoursAvailableManyReturn } from "../../interfaces/hoursAvailable.interface";
import { hoursAvailableManyReturnSchema } from "../../schemas/hoursAvailable.schemas";

const listHoursAvailableService =
	async (): Promise<IHoursAvailableManyReturn> => {
		const hoursAvailableRepository: Repository<Hour_Available> =
			AppDataSource.getRepository(Hour_Available);
		const hoursAvailable = await hoursAvailableRepository.find();

		const hoursAvailableReturn =
			hoursAvailableManyReturnSchema.parse(hoursAvailable);

		return hoursAvailableReturn;
	};

export default listHoursAvailableService;
