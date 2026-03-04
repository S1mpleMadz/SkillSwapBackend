const model = {};

model.table = "userskills";
model.mutableFields = [
  "UserID",
  "SkillID"
];
model.idField = "SkillID";

model.buildReadQuery = (id, variant) => {

  let sql = `SELECT * FROM ${model.table}`;
  let data = { ID: id };


  switch (variant) {
    case "SkillID":
      sql += ` WHERE skills.SkillID=:ID`;
      break;
    case "UserID":
      sql += ` WHERE skills.UserID=:ID`;
      break;
    default:
      break;
  }

  return { sql, data };
};

export default model;
