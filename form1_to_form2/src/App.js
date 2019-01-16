import React, { Component } from 'react';
import './App.css';
import Form1 from './component/body/Form1';
import Form2 from './component/body/Form2';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      form1: {
        fname: '',
        lname: '',
        email: '',
        gender: '',
        degree: '',
        c: '',
        java: ''
      },
      form2: {
        fname: '',
        lname: '',
        email: '',
        gender: '',
        degree: '',
        c: '',
        java: ''
      }
    };
    this.setValue = this.setValue.bind(this);
    this.onClickAction = this.onClickAction.bind(this);
  }

  setValue(key, value) {
    let obj = {};
    obj = this.state.form1;
    obj[key] = value;
    this.setState(obj);
  }

  onClickAction(obj) {
    obj = this.state.form1;
    this.setState({ form2: obj });
  }

  render() {
    return (
      <div className="App">
        <h1> Data transfer between two components</h1>
        <div id="left">
          <Form1 setValue={this.setValue} onClickAction={this.onClickAction} />
        </div>
        <div id="right">
          <Form2 receiveValue={this.state.form2} />
        </div>
      </div>
    );
  }
}
export default App;