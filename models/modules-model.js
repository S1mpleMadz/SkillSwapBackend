const model = {};

model.table = "Modules";
model.mutableFields = [
  "ModuleCode",
  "ModuleName",
  "ModuleImageURL",
  "ModuleLevel",
  "ModuleCredits",
  "ModuleSize",
  "ModuleEffort",
  "ModuleLeaderID",
  "DepartmentID",
];
model.idField = "ModuleID";

model.buildReadQuery = (id, variant) => {
  const resolvedTable = `Modules 
  LEFT JOIN Users ON Modules.ModuleLeaderID = Users.UserID 
  LEFT JOIN Departments ON Modules.DepartmentID = Departments.DepartmentID`;

  const qualifiedMutableFields = model.mutableFields.map(
    (field) => `Modules.${field}`,
  );

  const resolvedFields = [
    `Modules.${model.idField}`,
    ...qualifiedMutableFields,
    "Users.UserFirstname AS LeaderFirstname",
    "Users.UserLastname AS LeaderLastname",
    "Departments.DepartmentName",
  ].join(", ");

  let sql = `SELECT ${resolvedFields} FROM ${resolvedTable}`;
  let data = { ID: id };

  switch (variant) {
    case "Department":
      sql += ` WHERE Modules.DepartmentID=:ID`;
      break;
    case "Leader":
      sql += ` WHERE Modules.ModuleLeaderID=:ID`;
      break;
    default:
      if (id) sql += ` WHERE Modules.ModuleID=:ID`;
  }

  return { sql, data };
};

export default model;
