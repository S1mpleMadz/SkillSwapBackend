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
    case "UserID":
      sql += ` WHERE skills.UserID=:ID`;
      break;
    case "UserFirstname":
      sql += ` WHERE skills.UserFirstname=:ID`;
      break;
    default:
      break;
  }

  return { sql, data };
};

export default model;
