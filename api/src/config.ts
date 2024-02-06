require("dotenv").config();
const MONGO_URL = process.env.MONGO_URL;
const PORT = process.env.PORT;
const APP_URL = process.env.APP_URL;

export { PORT, MONGO_URL, APP_URL };
