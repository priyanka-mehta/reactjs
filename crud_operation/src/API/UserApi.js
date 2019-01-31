import axios from 'axios';
import * as Interceptor from './../HttpIterceptor/HttpInterceptor';

export const fetchUserList = (id) => {
  const apiurl = `users?page=${id}`;
  return Interceptor.fetchUserList(apiurl);
};

export const deleteRecord = (id) => {
  const apiurl = `users/${id}`;
  return Interceptor.deleteRecord(apiurl);
};

export const getUser = (id) => {
  const apiurl = `users/${id}`;
  return Interceptor.getUser(apiurl);
};

// export const addUser = (url, fname, lname) => {
//   const apiurl = `users`;
//   return Interceptor.addUser(apiurl);
// };

export const addUser = (fname, lname) => {
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