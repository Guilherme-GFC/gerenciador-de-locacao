import { createLoginSchema } from "../schemas/login.schemas";
import { z } from "zod";

type ILogin = z.infer<typeof createLoginSchema>;

export { ILogin };
