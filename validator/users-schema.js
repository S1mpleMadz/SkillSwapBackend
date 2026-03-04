import joi from "joi";

const schema = {};

schema.mutableFields = ["UserTitle", "UserFirstname", "UserLastname", "userEmail", "userPassword"];

schema.recordSchema = joi
  .object({
    UserID: joi.number().integer(),
    UserTitle: joi.string(),
    UserFirstname: joi.string(),
    UserLastname: joi.string(),
    userEmail: joi.string(),
    userPassword: joi.string()
  })
  .required()
  .unknown(true);

export default schema;
