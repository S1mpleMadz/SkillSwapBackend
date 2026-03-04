class Controller {
  constructor(validator, accessor) {
    this.validator = validator;
    this.accessor = accessor;
  }

  // Methods

  // GET
  get = async (req, res, variant) => {
    const id = req.params.id;

    // Build SQL

    // Validate request
    const { isValid, message: validatorMessage } = this.validator.get(id);
    if (!isValid) return res.status(404).json({ message: validatorMessage });

    // Access Data
    const { isSuccess, result, message } = await this.accessor.read(
      id,
      variant,
    );
    if (!isSuccess) return res.status(404).json({ message });

    // responses
    res.status(200).json(result);
  };

  // POST
  post = async (req, res) => {
    const record = req.body;
    // Build SQL

    // Validate request
    const { isValid, message: validatorMessage } = this.validator.post(record);
    if (!isValid) return res.status(404).json({ message: validatorMessage });

    // Access Data
    const { isSuccess, result, message } = await this.accessor.create(record);
    if (!isSuccess) return res.status(404).json({ message });

    // responses
    res.status(201).json(result);
  };

  //  PUT
  put = async (req, res) => {
    const id = req.params.id;
    const record = req.body;

    // Build SQL

    // Validate request
    const { isValid, message: validatorMessage } = this.validator.put({
      id,
      record,
    });
    if (!isValid) return res.status(404).json({ message: validatorMessage });

    // Access Data
    const { isSuccess, result, message } = await this.accessor.update(
      record,
      id,
    );
    if (!isSuccess) return res.status(404).json({ message });
    // responses
    res.status(200).json(result);
  };

  // DELETE
  delete = async (req, res) => {
    const id = req.params.id;

    // Build SQL

    // Validate request
    const { isValid, message: validatorMessage } = this.validator.delete(id);
    if (!isValid) return res.status(404).json({ message: validatorMessage });
    // Access Data
    const { isSuccess, result, message } = await this.accessor.delete(id);
    if (!isSuccess) return res.status(404).json({ message });
    // responses
    res.status(204).json(message);
  };
}

export default Controller;
