import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getUserList } from '../../utils';

class UserList extends React.Component {

  componentDidMount() {
    this.props.dispatch(getUserList());
  }

  render() {
    const { match } = this.props
    return (
      <div>
        <h2>User List</h2>
        <button><NavLink to={`${match.url}/add`}>Add User</NavLink></button>
        <br />
        <br />
        <table border='2'>
          <tbody>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Edit</th>
            </tr>
            {(this.props.data.MainReducer.userList || []).map((i, key) => {
              return (
                <tr key={key}>
                  <td>{i.first_name}</td>
                  <td>{i.last_name}</td>
                  <td>{i.email}</td>
                  <td><NavLink to={`${match.url}/${i.id}`}>Edit</NavLink></td>
                </tr>
              )
            })
            }
          </tbody>
        </table>
      </div>
    )
  }
}

const stateData = state => {
  return { data: state }
}

export default connect(stateData)(UserList);