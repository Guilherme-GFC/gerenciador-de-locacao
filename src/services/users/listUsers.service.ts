import { Repository } from "typeorm";
import { User } from "../../entities/user.entity";
import AppDataSource from "../../data-source";
import { manyReturnUserSchema } from "../../schemas/users.schemas";
import { IUsersReturn } from "../../interfaces/users.interface";

const listUsersService = async (): Promise<IUsersReturn> => {
	const userRepository: Repository<User> = AppDataSource.getRepository(User);
	const users = await userRepository.find();

	const returnUsers = manyReturnUserSchema.parse(users);
	return returnUsers;
};

export default listUsersService;
