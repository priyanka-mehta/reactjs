import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userList: [],
      loading: false
    }
  }

  getUserData() {
    this.setState({ loading: true });
    fetch('https://reqres.in/api/users?page=2')
      .then(res => {
        return res.json();
      })
      .then(res => {
        console.log('res :', res);
        this.setState({ userList: res.data || [], loading: false });
      });
  }
  render() {
    return (
      <div className="App">
        <button onClick={() => this.getUserData()}>Click me</button><br /><hr />
        {this.state.loading ? <b>loading</b> : null}
        {this.state.userList.map((u, i) => {
          return <div key={i}>
            First Name : {u.first_name}<br />
            Last Name : {u.last_name}<br />
            <hr />
          </div>
        })}
      </div>
    );
  }
}
export default App;