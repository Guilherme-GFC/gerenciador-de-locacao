import { Repository } from "typeorm";
import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";

const deleteUserService = async (userId: string): Promise<void> => {
	const userRepository: Repository<User> = AppDataSource.getRepository(User);
	const findUser = await userRepository.findOneBy({
		id: userId,
	});

	await userRepository.softRemove(findUser!);
};

export default deleteUserService;
