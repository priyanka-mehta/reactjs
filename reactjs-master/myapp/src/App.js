import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import Footer from './component/Footer';
import Signup from './component/body/Signup';
import Login from './component/body/Login';

class App extends Component {
  constructor(props) {
    super(props);
    this.state =
      {
        username: '',
        password: '',
        isSigned: false,
        email: ''
      };
  }
  onChange(user) {
    this.setState(
      {
        username: user.username,
        password: user.password,
        isSigned: user.isSigned
      }
    );
  }
  render() {
    if (this.state.isSigned !== true) {
      return (
        <div>
          <Header />
          <Signup onChange={this.onChange.bind(this)} />
          <Footer />
        </div>
      );
    }
    else {
      return (
        <div>
          <Header />
          <Login data={this.state} />
          <Footer />
        </div>
      );
    }
  }
}
export default App;