import joi from "joi";

const schema = {};

schema.mutableFields = ["timeblocks"];

schema.recordSchema = joi
  .object({
    SkillID: joi.number().integer(),
    SkillName: joi.string(),
  })
  .required()
  .unknown(true);

export default schema;
