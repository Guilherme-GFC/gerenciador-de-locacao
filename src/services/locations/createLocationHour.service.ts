import { Repository } from "typeorm";
import { Location } from "../../entities/location.entity";
import { Hour_Available } from "../../entities/hour_available.entity";
import AppDataSource from "../../data-source";
import { AppError } from "../../errors";
import {
	ILocationHourCreate,
	ILocationHourReturn,
} from "../../interfaces/location.interface";
import { locationAndHourReturnSchema } from "../../schemas/location.schemas";

const createLocationHourService = async (
	locationId: string,
	locationHour: ILocationHourCreate
): Promise<ILocationHourReturn> => {
	const locationRepository: Repository<Location> =
		AppDataSource.getRepository(Location);
	const location = await locationRepository.findOne({
		where: {
			id: locationId,
		},
		relations: {
			hours: true,
		},
	});

	if (location!.hours.length >= 10) {
		throw new AppError(
			"This location already has ten appointments available.",
			409
		);
	}

	const hoursRepository: Repository<Hour_Available> =
		AppDataSource.getRepository(Hour_Available);
	const findHour = await hoursRepository.findOne({
		where: {
			hour: locationHour.hour,
		},
	});

	let hour: Hour_Available;

	if (!findHour) {
		const newHour = hoursRepository.create({ hour: locationHour.hour });

		await hoursRepository.save(newHour);

		hour = newHour;
	} else {
		const isHourInLocation = location?.hours.find(
			(el) => el.id === findHour.id
		);
		if (isHourInLocation) {
			throw new AppError("Hour already exists in this location", 409);
		}

		hour = findHour;
	}

	location!.hours.push(hour);
	await locationRepository.save(location!);

	const returnLocation = locationAndHourReturnSchema.parse(location);

	return returnLocation;
};

export default createLocationHourService;
