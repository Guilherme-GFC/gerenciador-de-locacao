import AppDataSource from "../../data-source";
import { Repository } from "typeorm";
import { User } from "../../entities/user.entity";
import { IUserReturn } from "../../interfaces/users.interface";
import { returnUserSchema } from "../../schemas/users.schemas";
import { AppError } from "../../errors";

const restoreUserService = async (email: string): Promise<any> => {
	const userRepository: Repository<User> = AppDataSource.getRepository(User);

	const restoreData = await userRepository.restore({ email: email });

	if (restoreData.affected === 0) {
		throw new AppError("User not found", 404);
	}

	const user = await userRepository.findOne({
		where: {
			email: email,
		},
		withDeleted: true,
	});

	const returnUser = returnUserSchema.parse(user);

	return returnUser;
};

export default restoreUserService;
