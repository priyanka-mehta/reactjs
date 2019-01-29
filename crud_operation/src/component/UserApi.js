import axios from 'axios';

export const addData = (fname, lname) => {
  return (
    axios.post('https://reqres.in/api/users' || `https://reqres.in/api/users/${this.props.match.params.id}`,
      {
        first_name: fname,
        last_name: lname,
      })
      .then(function (res) {
        console.log("Data is : ", res);
      })
      .catch(function (error) {
        console.log("Something went wrong.");
      })
  );
};

export const getData = (id) => {
  return (
    axios.get(`https://reqres.in/api/users/${id}`)
      .then(res => {
        console.log("Data fetching", res);
        return res;
      })
      .catch(function (error) {
        console.log("Something went wrong.");
      })
  );
};

export const fetchData = (id) => {
  return (
    axios.get(`https://reqres.in/api/users?page=${id}`)
      .then(res => {
        return res;
      })
      .catch(function (error) {
        console.log("Something went wrong.");
      })
  );
};

export const deleteRecord = (id) => {
  return (
    axios.delete(`https://reqres.in/api/users/${id}`)
      .then(res => {
        return res;
      })
      .catch(function (error) {
        console.log("Something went wrong.");
      })
  );
};