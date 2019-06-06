import React, { Component } from 'react';
import { addUser, getUserById, editUser } from '../../utils'
import _ from 'lodash';
import { connect } from 'react-redux';

// initialize form
const initForm = {
  first_name: '',
  last_name: '',
  email: '',
  errors: {
    first_name: null,
    last_name: null,
    email: null
  }
};

class AddEditUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: _.cloneDeep(initForm)
    }
  }

  componentDidMount() {
    if (this.props.match.params.id !== 'add') {
      this.getUserById();
    }
  }

  getUserById() {
    getUserById(this.props.match.params.id)
      .then(res => {
        this.setState({ form: res })
      })
  }

  handleChange(path, value) {
    let data = _.cloneDeep(this.state);
    _.set(data, path, value);
    this.setState({ ...data })
  }

  addEditUser() {
    const { first_name, last_name, email } = this.state.form;
    const { history, dispatch, match } = this.props;
    if (match.params.id === 'add') {
      dispatch(addUser(first_name, last_name, email))
    }
    else {
      dispatch(editUser(first_name, last_name, email, match.params.id))
    }
    history.push('/user-list')
  }

  render() {
    const { first_name, last_name, email } = this.state.form
    const { match } = this.props;
    return (
      <div>
        {match.params.id === 'add' ? <h2>Add User</h2> : <h2>Edit User</h2>}
        <table border='2'>
          <tbody>
            <tr>
              <td>First Name</td>
              <td>
                <input
                  type='text'
                  name='first_name'
                  value={first_name}
                  onChange={(e) => this.handleChange('form.first_name', e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>Last Name</td>
              <td>
                <input
                  type='text'
                  name='last_name'
                  value={last_name}
                  onChange={(e) => this.handleChange('form.last_name', e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>Email</td>
              <td>
                <input
                  type='text'
                  name='email'
                  value={email}
                  onChange={(e) => this.handleChange('form.email', e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td colSpan='2' align='center'>
                <button onClick={() => this.addEditUser()}>
                  {match.params.id === 'add' ? <div>Add User</div> : <div>Edit User</div>}
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}
export default connect()(AddEditUser);