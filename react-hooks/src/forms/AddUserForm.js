import React, { useState } from 'react'

const AddUserForm = props => {
  const initialState = { id: null, name: '', email: '' }
  const [user, setUser] = useState(initialState)

  const handleChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  return (
    <div>
      <form
        onSubmit={e => {
          // debugger;
          e.preventDefault()
          if (!user.name || !user.email) return
          props.addUser(user)
          setUser(initialState)
        }}
      >
        <table border='2'>
          <tbody>
            <tr>
              <td>Name</td>
              <td><input type='text' name='name' value={user.name} onChange={handleChange} /></td>
            </tr>
            <tr>
              <td>Email</td>
              <td><input type='text' name='email' value={user.email} onChange={handleChange} /></td>
            </tr>
            <tr>
              <td colSpan='2'>
                <button>Add new User</button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
      {/*  */}
    </div>
  )
}

export default AddUserForm;