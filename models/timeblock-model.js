const model = {};

model.table = "timeblocks";
model.mutableFields = ["TimeBlockID", "TimeBlock"];
model.idField = "TimeBlockID";

model.buildReadQuery = (id, variant) => {
  let sql = `SELECT * FROM ${model.table}`;
  let data = { ID: id };

  switch (variant) {
    case "TimeBlockID":
      sql += ` WHERE skills.SkillID=:ID`;
      break;
    default:
      break;
  }

  return { sql, data };
};

export default model;
