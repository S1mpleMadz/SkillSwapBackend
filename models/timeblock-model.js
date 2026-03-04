const model = {};

model.table = "timeblocks";
model.mutableFields = ["TimeBlockID", "TimeBlock"];
model.idField = "TimeBlockID";

model.buildReadQuery = (id, variant) => {
  let sql = `SELECT * FROM ${model.table}`;
  let data = { ID: id };

  return { sql, data };
};

export default model;
