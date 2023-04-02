import { Repository } from "typeorm";
import { Location } from "../../entities/location.entity";
import { Hour_Available } from "../../entities/hour_available.entity";
import AppDataSource from "../../data-source";
import { AppError } from "../../errors";

const removeLocationHourService = async (
	locationId: string,
	hourId: string
): Promise<string> => {
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

	const hoursRepository: Repository<Hour_Available> =
		AppDataSource.getRepository(Hour_Available);

	const hourPosition = location?.hours.findIndex((el) => el.id === hourId);

	if (hourPosition === -1) {
		throw new AppError("Hour doesn't exist in this location", 409);
	}

	location!.hours.splice(hourPosition!, 1);
	await locationRepository.save(location!);

	return "Appointment time removed";
};

export default removeLocationHourService;
