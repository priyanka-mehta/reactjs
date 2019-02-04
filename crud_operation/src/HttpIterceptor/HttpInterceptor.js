import axios from 'axios';

export const posts = (fullUrl) => {
  return {

    delete: () => axios.delete(fullUrl)
      .then(function (res) {
        return res;
      })
      .catch(function (error) {
        console.log("Something went wrong.");
      }),

    get: () => axios.get(fullUrl)
      .then(function (res) {
        console.log("User data : ", res.data);
        return res;
      })
      .catch(function (error) {
        console.log("Something went wrong.");
      }),

    post: (fname, lname) => axios.post(fullUrl, { first_name: fname, last_name: lname })
      .then(function (res) {
        console.log("User Added : ", res.data);
        return res;
      })
      .catch(function (error) {
        console.log("Something went wrong.");
      }),

    put: (fname, lname) => axios.put(fullUrl, { first_name: fname, last_name: lname })
      .then(function (res) {
        console.log("Edit User : ", res.data);
        return res;
      })
      .catch(function (error) {
        console.log("Something went wrong.");
      }),

  };
};

// export const post = (fullUrl, fname, lname) => {
//   return (
//     axios.put(fullUrl,
//       {
//         first_name: fname,
//         last_name: lname,
//       })
//       .then(function (res) {
//         console.log("Edited Data is : ", res);
//       })
//       .catch(function (error) {
//         console.log("Something went wrong.");
//       })
//   );
// };

// export const put = (fullUrl, fname, lname) => {
//   return (
//     axios.put(fullUrl,
//       {
//         first_name: fname,
//         last_name: lname,
//       })
//       .then(function (res) {
//         console.log("Edited Data is : ", res);
//       })
//       .catch(function (error) {
//         console.log("Something went wrong.");
//       })
//   );
// };

// export const get = (fullUrl) => {
//   console.log("Full url", fullUrl);
//   return (
//     axios.get(fullUrl)
//       .then(function (res) {
//         console.log("Data is: ", res.data);
//         return res;
//       })
//       .catch(function (error) {
//         console.log("Something went wrong.", error);
//       })
//   );
// };

// export const deleteRecord = (apiurl) => {
//   let fullUrl = `${baseUrl}${apiurl}`;
//   return (
//     axios.delete(fullUrl)
//       .then(function (res) {
//         return res;
//       })
//       .catch(function (error) {
//         console.log("Something went wrong.");
//       })
//   );
// };

