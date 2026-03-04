import joi from "joi";

const schema = {};

schema.mutableFields = [
  "ModuleCode",
  "ModuleName",
  "ModuleImageURL",
  "ModuleLevel",
  "ModuleCredits",
  "ModuleSize",
  "ModuleEffort",
  "ModuleLeaderID",
  "DepartmentID",
];

schema.recordSchema = joi
  .object({
    ModuleID: joi.number().integer(),
    ModuleCode: joi.string().min(2),
    ModuleName: joi.string().min(3),
    ModuleImageURL: joi.string().uri().allow(""),
    ModuleLevel: joi.number().integer(),
    ModuleCredits: joi.number().integer(),
    ModuleSize: joi.number().integer(),
    ModuleEffort: joi.number(), // Decimal
    ModuleLeaderID: joi.number().integer().allow(null),
    DepartmentID: joi.number().integer(),
  })
  .required()
  .unknown(true);

export default schema;
