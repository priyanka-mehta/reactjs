export const reValidation = (name, value) => {
  let re;
  switch (name) {
    case 'name': {
      re = /^[a-zA-Z ]{2,30}$/;
      break;
    }
    case 'number': {
      re = /^[ ()+]*([0-9][ ()+]*){10}$/;
      break;
    }
    case 'email': {
      re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      break;
    }
    case 'password': {
      re = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
      break;
    }
    case 'confirmPassword': {
      re = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
      break;
    }
    default:
  }
  if (value.match(re)) {
    return true;
  } else {
    let msg = "please enter valid " + name;
    return msg;
  }
}