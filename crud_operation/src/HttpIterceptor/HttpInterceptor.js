import axios from 'axios';

const baseUrl = 'https://reqres.in/api/';

export const fetchUserList = (apiurl) => {
  let fullUrl = `${baseUrl}${apiurl}`;
  console.log("Full url", fullUrl);
  return (
    axios.get(fullUrl)
      .then(res => {
        console.log(res);
        return res;
      })
      .catch(function (error) {
        console.log("Something went wrong.", error);
      })
  );
};

export const deleteRecord = (apiurl) => {
  let fullUrl = `${baseUrl}${apiurl}`;
  return (
    axios.delete(fullUrl)
      .then(res => {
        return res;
      })
      .catch(function (error) {
        console.log("Something went wrong.");
      })
  );
};

export const getUser = (apiurl) => {
  let fullUrl = `${baseUrl}${apiurl}`;
  return (
    axios.get(fullUrl)
      .then(res => {
        return res;
      })
      .catch(function (error) {
        console.log("Something went wrong.");
      })
  );
};


export const addUser = (apiurl, fname, lname) => {
  let fullUrl = `${baseUrl}${apiurl}`;
  console.log("URL is : ", fullUrl);
  return (
    axios.post(fullUrl,
      {
        first_name: fname,
        last_name: lname,
      })
      .then(function (res) {
        console.log("Data is: ", res.data);
      })
      .catch(function (error) {
        console.log("Something went wrong.");
      })
  );
};


// export const addUser = (fname, lname) => {
//   return (
//     axios.post('https://reqres.in/api/users' || `https://reqres.in/api/users/${this.props.match.params.id}`,
//       {
//         first_name: fname,
//         last_name: lname,
//       })
//       .then(function (res) {
//         console.log("Data is : ", res);
//       })
//       .catch(function (error) {
//         console.log("Something went wrong.");
//       })
//   );
// };