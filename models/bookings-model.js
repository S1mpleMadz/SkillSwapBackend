const model = {};

model.table = "bookings";
model.mutableFields = [
  "BookingID",
  "UserID",
  "BookedUserID",
  "TimeBlockID"
];
model.idField = "BookingID";

model.buildReadQuery = (id, variant) => {
  const qualifiedMutableFields = model.mutableFields.map(
    (field) => `Modules.${field}`,
  );


  let sql = `SELECT * FROM ${model.table}`;
  let data = { ID: id };

  switch (variant) {
    case "Booking":
      sql += ` WHERE bookings.BookingID=:ID`;
      break;
    case "User":
      sql += ` WHERE bookings.UserId=:ID`;
      break;
    case "BookedUser":
      sql += ` WHERE bookings.BookedUserID=:ID`
      break;
    default:
      if (id) sql += ``;
  }

  return { sql, data };
};

export default model;
