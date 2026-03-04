import { Router } from "express";
import Validator from "../validator/Validator.js";
import database from "../database.js";
import schema from "../validator/modules-schema.js";
import Model from "../models/Model.js";
import modulesModelConfig from "../models/bookings-model.js";
import Accessor from "../accessor/Accessor.js";
import Controller from "../controller/Controller.js";

const validator = new Validator(schema);
const model = new Model(modulesModelConfig);
const accessor = new Accessor(model, database);
const controller = new Controller(validator, accessor);

const router = Router();

router.get("/", (req, res) => controller.get(req, res, null));
router.get("/:id", (req, res) => controller.get(req, res, null));
router.post("/", controller.post);
router.put("/:id", controller.put);
router.delete("/:id", controller.delete);

router.get("/department/:id", (req, res) =>
  controller.get(req, res, "Department"),
);
router.get("/leader/:id", (req, res) => controller.get(req, res, "Leader"));

export default router;
