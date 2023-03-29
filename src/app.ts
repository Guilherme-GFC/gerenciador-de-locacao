import "express-async-errors";
import express, { Application } from "express";

//função de erro
import { handleErrors } from "./errors";

//rotas
import leaseRoutes from "./routers/leases.routes";
import locationRoutes from "./routers/locations.routes";
import loginRoutes from "./routers/login.routes";
import userRoutes from "./routers/users.routes";

const app: Application = express();

app.use(express.json());

app.use("/users", userRoutes);
app.use("/login", loginRoutes);
app.use("/locations", locationRoutes);
app.use("/leases", leaseRoutes);

app.use(handleErrors);

export default app;
