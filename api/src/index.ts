import { PORT, APP_URL } from "./config";
import "./mongo";
const bodyParser = require("body-parser");
const cors = require("cors");
const express = require("express");
const cookieParser = require("cookie-parser");

const app = express();

const origin = [APP_URL];

console.log("origin", origin);
app.use(cors({ credentials: true, origin }));
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(express.static(__dirname + "/../public"));

app.use("/", require("./controllers/url"));

app.listen(PORT, () => console.log("Listening on port " + PORT));
