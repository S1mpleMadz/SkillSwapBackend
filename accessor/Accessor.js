class Accessor {
  constructor(model, database) {
    this.model = model;
    this.database = database;
  }

  // Methods

  create = async (record) => {
    try {
      const { sql, data } = this.model.buildCreateQuery(record);
      const status = await this.database.query(sql, data);

      const { isSuccess, result, message } = await this.read(
        status[0].insertId,
        null,
      );

      return isSuccess
        ? {
            isSuccess: true,
            result: result,
            message: "Record successfully created",
          }
        : {
            isSuccess: false,
            result: null,
            message: ` failed to recover inserted record: ${message}`,
          };
    } catch (error) {
      return {
        isSuccess: false,
        result: null,
        message: `Failed to execute query: ${error.message}`,
      };
    }
  };

  read = async (id, variant) => {
    try {
      const { sql, data } = this.model.buildReadQuery(id, variant);

      const [result] = await this.database.query(sql, data);
      return result.length === 0
        ? { isSuccess: false, result: null, message: "No record(s) found" }
        : { isSuccess: true, result, message: "Record(s) recovered" };
    } catch (error) {
      return { isSuccess: false, message: `Query failed: ${error.message}` };
    }
  };

  update = async (record, id) => {
    try {
      const { sql, data } = this.model.buildUpdateQuery(record, id);
      const status = await this.database.query(sql, data);

      if (status[0].affectedRows === 0)
        return {
          isSuccess: false,
          result: null,
          message: `Failed to update record: no rows affected ${error.message}`,
        };

      const { isSuccess, result, message } = await this.read(id, null);

      return isSuccess
        ? {
            isSuccess: true,
            result: result,
            message: "Record successfully created",
          }
        : {
            isSuccess: false,
            result: null,
            message: ` failed to recover update record: ${message}`,
          };
    } catch (error) {
      return {
        isSuccess: false,
        result: null,
        message: `Failed to execute query: ${error.message}`,
      };
    }
  };

  delete = async (id) => {
    try {
      const { sql, data } = this.model.buildDeleteQuery(id);
      const status = await this.database.query(sql, data);

      return status[0].affectedRows === 0
        ? {
            isSuccess: false,
            result: null,
            message: ` failed to delete record: ${id}`,
          }
        : {
            isSuccess: true,
            result: null,
            message: "Record successfully deleted",
          };
    } catch (error) {
      return {
        isSuccess: false,
        result: null,
        message: `Failed to execute query: ${error.message}`,
      };
    }
  };
}

export default Accessor;
