import joi from "joi";

const schema = {};

schema.mutableFields = ["UserID", "BookingUserID", "TimeBlockID"];

schema.recordSchema = joi
  .object({
    BookingID: joi.number().integer(),
    UserID: joi.number().integer(),
    BookingUserID: joi.number().integer(),
    TimeBlockID: joi.number().integer()
  })
  .required()
  .unknown(true);

export default schema;
