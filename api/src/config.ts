require("dotenv").config();
const MONGO_URL = process.env.MONGO_URL;
const PORT = process.env.PORT;
const APP_URL = process.env.APP_URL;
const API_URL = process.env.API_URL;

export { PORT, MONGO_URL, APP_URL, API_URL };
