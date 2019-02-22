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
  else if (!fields.name.match(/^[a-zA-Z ]{2,30}$/)) {
    return error;
  }
  else if (!fields.number.match(/^[ ()+]*([0-9][ ()+]*){10}$/)) {
    return error;
  }
  else if(!fields.email.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)){
    return error;
  }
  else if(!fields.password.match(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/)){
    return error;
  }
  else {
    return null;
  }
}