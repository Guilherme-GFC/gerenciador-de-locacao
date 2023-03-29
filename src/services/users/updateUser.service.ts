import { IUserUpdate, IUserReturn } from "../../interfaces/users.interface";
import { Repository } from "typeorm";
import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { returnUserSchema } from "../../schemas/users.schemas";

const updateUserService = async (
	userId: string,
	userData: IUserUpdate
): Promise<IUserReturn> => {
	const userRepository: Repository<User> = AppDataSource.getRepository(User);
	const findUser = await userRepository.findOneBy({
		id: userId,
	});

	const user = userRepository.create({
		...findUser,
		...userData,
	});

	await userRepository.save(user);

	const userUpdated = returnUserSchema.parse(user);

	return userUpdated;
};

export default updateUserService;
