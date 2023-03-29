import { Repository } from "typeorm";
import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { IUser, IUserReturn } from "../../interfaces/users.interface";
import { returnUserSchema } from "../../schemas/users.schemas";

const createUserService = async (userData: IUser): Promise<IUserReturn> => {
	const userRepository: Repository<User> = AppDataSource.getRepository(User);
	const newUser = userRepository.create(userData);

	await userRepository.save(newUser);

	const returnUser = returnUserSchema.parse(newUser);

	return returnUser;
};

export default createUserService;
