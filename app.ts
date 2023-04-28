import express from "express";
import cors from "cors";
import apiRouter from "./routes/api";
import { customErrors } from "./controllers/errors";

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', apiRouter);
app.use(customErrors)

export default app;