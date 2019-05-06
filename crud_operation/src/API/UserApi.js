import * as interceptor from './../HttpIterceptor/HttpInterceptor';

const baseUrl = 'https://reqres.in/api/';

export const fetchUserList = (id) => {
  const apiurl = `users?page=${id}`;
  let fullUrl = `${baseUrl}${apiurl}`;
  return interceptor.posts(fullUrl).get();
}; 

export const getUser = (id) => {
  const apiurl = `users/${id}`;
  let fullUrl = `${baseUrl}${apiurl}`;
  return interceptor.posts(fullUrl).get();
};

export const addUser = (fname, lname) => {
  const apiurl = `users`;
  let fullUrl = `${baseUrl}${apiurl}`;
  return interceptor.posts(fullUrl).post(fname, lname);
};

export const editUser = (fname, lname, id) => {
  const apiurl = `users/${id}`;
  let fullUrl = `${baseUrl}${apiurl}`;
  return interceptor.posts(fullUrl).put(fname, lname);
};

export const deleteRecord = (id) => {
  const apiurl = `users/${id}`;
  let fullUrl = `${baseUrl}${apiurl}`;
  return interceptor.posts(fullUrl).delete();
};