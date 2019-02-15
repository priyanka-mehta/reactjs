export const onSubmit = (signup, error) => {
  let result = false;
  const fields = signup;
  for (let field in fields) {
    if (fields[field] === "") {
      result = true
      error[field] = "Please fill :  " + field;
    }
  }
  if (result) {
    return error;
  }
  else if (!fields.name.match("[a-zA-Z]+\\.?")) {
    error[fields] = "please enter valid " + fields.name;
    return error;
  }
  else {
    return null;
  }
}