import { Repository } from "typeorm";
import { IUserReturn } from "../../interfaces/users.interface";
import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { returnUserSchema } from "../../schemas/users.schemas";

const retrieveUserService = async (userId: string): Promise<IUserReturn> => {
	const userRepository: Repository<User> = AppDataSource.getRepository(User);
	const findUser = await userRepository.findOneBy({
		id: userId,
	});

	const user = returnUserSchema.parse(findUser);

	return user;
};

export default retrieveUserService;
