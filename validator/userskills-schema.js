import joi from "joi";

const schema = {};

schema.mutableFields = ["UserID", "SkillID"];

schema.recordSchema = joi
  .object({
    UserSkillID: joi.number().integer(),
    UserID: joi.number().integer(),
    SkillID: joi.number().integer()
  })
  .required()
  .unknown(true);

export default schema;
