import axios from 'axios';

const baseUrl = 'https://reqres.in/api/';

export const get = (apiurl) => {
  let fullUrl = `${baseUrl}${apiurl}`;
  console.log("Full url", fullUrl);
  return (
    axios.get(fullUrl)
      .then(function (res) {
        console.log("Data is: ", res.data);
        return res;
      })
      .catch(function (error) {
        console.log("Something went wrong.", error);
      })
  );
};

export const post = (apiurl, fname, lname) => {
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

export const put = (apiurl, fname, lname) => {
  let fullUrl = `${baseUrl}${apiurl}`;
  return (
    axios.put(fullUrl,
      {
        first_name: fname,
        last_name: lname,
      })
      .then(function (res) {
        console.log("Edited Data is : ", res);
      })
      .catch(function (error) {
        console.log("Something went wrong.");
      })
  );
};

export const deleteRecord = (apiurl) => {
  let fullUrl = `${baseUrl}${apiurl}`;
  return (
    axios.delete(fullUrl)
      .then(function (res) {
        return res;
      })
      .catch(function (error) {
        console.log("Something went wrong.");
      })
  );
};