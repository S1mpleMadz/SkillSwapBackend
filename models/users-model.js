const model = {};

model.table = "users";
model.mutableFields = [
  "UserID",
  "UserTitle",
  "UserFirstname",
  "UserLastname",
  "UserEmail",
  "UserPassword"
];
model.idField = "UserID";

model.buildReadQuery = (id, variant) => {

  let sql = `SELECT * FROM ${model.table}`;
  let data = { ID: id };

  switch (variant) {
    case "UID":
      sql += ` WHERE users.UserID=:ID`;
      break;
    case "Firstname":
      sql += ` WHERE users.UserFirstname=:ID`;
      break;
    case "Lastname":
      sql += ` WHERE users.UserLastname=:ID`
      break;
    case "Email":
      sql += ` WHERE users.UserLastname=:ID`
      break;
    default:
      if (id) sql += ` WHERE users.UserID=:ID`;
  }

  return { sql, data };
};

export default model;
