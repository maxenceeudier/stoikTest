const express = require("express");
const router = express.Router();

import UrlModel from "../models/url";
import { nanoid } from "nanoid";
import { API_URL } from "../config";

const BAD_REQUEST = "BAD_REQUEST";
const NOT_FOUND = "NOT_FOUND";

router.post("/", async (req, res, next) => {
  try {
    if (!req.body.url) return res.status(400).send({ ok: false, message: BAD_REQUEST });

    const longUrl = req.body.url;
    const obj = { longUrl };
    const data = await UrlModel.findOne(obj);
    if (data) return res.status(200).send({ ok: true, data: { ...data, shortUrl: API_URL + "/" + data.shortUrl } });
    const shortUrl = nanoid(6);
    const newObj: any = await UrlModel.create({ longUrl, shortUrl });
    return res.status(200).send({ ok: true, data: { ...newObj, shortUrl: API_URL + "/" + newObj.shortUrl } });
  } catch (error) {
    next(error);
  }
});

router.get("/:url", async (req, res, next) => {
  try {
    const { url } = req.params;
    const data = await UrlModel.findOne({ shortUrl: url });
    if (!data) return res.status(404).send({ ok: false, message: NOT_FOUND });
    return res.redirect(data.longUrl);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
