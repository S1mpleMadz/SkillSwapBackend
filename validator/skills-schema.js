import joi from "joi";

const schema = {};

schema.mutableFields = ["SkillName"];

schema.recordSchema = joi
  .object({
    SkillID: joi.number().integer(),
    SkillName: joi.string().required(),
  })
  .required()
  .unknown(true);

export default schema;
