const validate = (schema) => (input) => {
  const { error } = schema.validate(input, { abortEarly: false });
  console.dir(error);
  if (error) {
    const result = error.details.reduce((ac, el) => {
      ac[el.path[0]] = el.message;
      return ac;
    }, {});
    return result;
  }
};

export default validate;
