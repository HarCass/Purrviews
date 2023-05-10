import httpServer from "./app";
import dotenv from "dotenv";

dotenv.config();

const port = process.env.PORT;

httpServer.listen(port, () => {
    console.log(`Server running on ${port}...`);
});