import mongoose from "mongoose";

const MODELNAME = "urls";

const Schema = new mongoose.Schema({
  shortUrl: { type: String, required: true, unique: true },
  longUrl: { type: String, required: true, unique: true },
  created_at: { type: Date, default: Date.now },
});

const OBJ = mongoose.model(MODELNAME, Schema);

export default OBJ;
