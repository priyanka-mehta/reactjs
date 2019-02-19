export const onSubmit = (signup, error) => {
  let result = false;
  const fields = signup;
  for (let field in fields) {
    if (fields[field] === "") {
      result = true;
      error[field] = "Please enter " + field;
    }
  }
  if (result) {
    return error;
  }
  else if (!fields.name.match("[a-zA-Z]+\\.?")) {
    return error;
  }
  else if (!fields.number.match("^[ ()+]*([0-9][ ()+]*){10}$")) {
    return error;
  }
  else {
    return null;
  }
}