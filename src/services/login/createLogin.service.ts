import { compare } from "bcryptjs";
import jwt from "jsonwebtoken";
import "dotenv/config";
import { Repository } from "typeorm";
import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors";
import { ILogin } from "../../interfaces/login.interface";

const createLoginService = async (loginData: ILogin): Promise<string> => {
	const userRepository: Repository<User> = AppDataSource.getRepository(User);

	const user = await userRepository.findOneBy({
		email: loginData.email,
	});

	if (!user) {
		throw new AppError("Wrong email or password", 401);
	}

	const passwordMatch = await compare(loginData.password, user.password);

	if (!passwordMatch) {
		throw new AppError("Wrong email or password", 401);
	}

	const token: string = jwt.sign(
		{
			isAdm: user.isAdm,
		},
		process.env.SECRET_KEY!,
		{
			expiresIn: "24h",
			subject: user.id,
		}
	);

	return token;
};

export default createLoginService;
