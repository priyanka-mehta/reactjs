import axios from 'axios';
import { GET_USERLIST, ADD_USER, EDIT_USER } from '../actions/index'

//Get User List
export const getUserList = () => (dispatch) => axios.get(`https://reqres.in/api/users`)
  .then(res => {
    dispatch(GET_USERLIST(res.data.data))
  })

//Add User
export const addUser = (fname, lname, email) => (dispatch) => {
  axios.post(`https://reqres.in/api/users`,
    {
      first_name: fname,
      last_name: lname,
      email: email
    })
    .then(res => {
      dispatch(ADD_USER(res))
    })
}

//Get Single User data
export const getUserById = (id) =>
  axios.get(`https://reqres.in/api/users/${id}`)
    .then(res => {
      return res.data.data
    })

//Edit User
export const editUser = (fname, lname, email, id) => (dispatch) => {
  axios.put(`https://reqres.in/api/users/${id}`,
    {
      first_name: fname,
      last_name: lname,
      email: email
    })
    .then(res => {
      dispatch(EDIT_USER(res))
    })
}