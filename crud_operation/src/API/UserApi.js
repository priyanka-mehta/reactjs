import * as interceptor from './../HttpIterceptor/HttpInterceptor';

export const fetchUserList = (id) => {
  const apiurl = `users?page=${id}`;
  return interceptor.get(apiurl);
};

export const getUser = (id) => {
  const apiurl = `users/${id}`;
  return interceptor.get(apiurl);
};

export const deleteRecord = (id) => {
  const apiurl = `users/${id}`;
  return interceptor.deleteRecord(apiurl);
};

export const editUser = (fname, lname, id) => {
  const apiurl = `users/${id}`;
  return interceptor.put(apiurl, fname, lname);
};

export const addUser = (fname, lname) => {
  const apiurl = `users`;
  return interceptor.post(apiurl, fname, lname);
};