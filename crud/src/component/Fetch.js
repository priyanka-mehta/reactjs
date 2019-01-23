import React, { Component } from 'react';
import Header from './Header';
import axios from 'axios';

class Fetch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userList: [],
      loading: false
    }
  }

  componentWillMount() {
    this.setState({ loading: true });
    axios.get('https://reqres.in/api/users?page=2')
    .then(res => {
        return res;
      })
      .then(res => {
        console.log('res :', res);
        this.setState({ userList: res.data.data|| [], loading: false });
      });
  }

  render() {
     
    return (
      <div className="App">
       <Header />
        {/* <button onClick={() => this.getUserData()}>Click me</button><br /><hr /> */}
        {this.state.loading ? <b>Please wait while we are getting user detail</b> : null}
        {this.state.userList.map((u, i) => {
          return <div key={i}>
            First Name : {u.first_name}<br />
            Last Name : {u.last_name}<br />
            <hr />
          </div>
        })}
        {console.log(this.state)}
      </div>
    );
  }
}
export default Fetch;