import joi from "joi";

const schema = {};

schema.mutableFields = ["TimeBlock"];

schema.recordSchema = joi
  .object({
    TimeBlockID: joi.number().integer(),
    TimeBlock: joi.string(),
  })
  .required()
  .unknown(true);

export default schema;
