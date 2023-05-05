import express from "express";
import cors from "cors";
import apiRouter from "./routes/api";
import { customErrors, serverErrors, dbErrors } from "./controllers/errors";

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', apiRouter);

app.use(customErrors);
app.use(dbErrors);
app.use(serverErrors);

export default app;