const model = {};

model.table = "skills";
model.mutableFields = [
  "SkillID",
  "SkillName"
];
model.idField = "SkillID";

model.buildReadQuery = (id, variant) => {

  let sql = `SELECT * FROM ${model.table}`;
  let data = { ID: id };


  switch (variant) {
    case "SkillID":
      sql += ` WHERE skills.SkillID=:ID`;
      break;
    default:
      break;
  }

  return { sql, data };
};

export default model;
