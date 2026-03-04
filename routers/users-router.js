import { Router } from "express";
import Validator from "../validator/Validator.js";
import database from "../database.js";
import schema from "../validator/users-schema.js";
import Model from "../models/Model.js";
import skillModelConfig from "../models/users-model.js";
import Accessor from "../accessor/Accessor.js";
import Controller from "../controller/Controller.js";

const validator = new Validator(schema);
const model = new Model(skillModelConfig);
const accessor = new Accessor(model, database);
const controller = new Controller(validator, accessor);

const router = Router();

router.get("/", (req, res) => controller.get(req, res, null));
export default router;
