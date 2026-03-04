import { Router } from "express";
import Validator from "../validator/Validator.js";
import database from "../database.js";
import schema from "../validator/userskills-schema.js";
import Model from "../models/Model.js";
import timeblockConfig from "../models/userskills-model.js";
import Accessor from "../accessor/Accessor.js";
import Controller from "../controller/Controller.js";

const validator = new Validator(schema);
const model = new Model(timeblockConfig);
const accessor = new Accessor(model, database);
const controller = new Controller(validator, accessor);

const router = Router();

router.get("/", (req, res) => controller.get(req, res, null));
export default router;
