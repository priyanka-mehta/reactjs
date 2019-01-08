import React, { Component } from 'react';
import './App.css';
import Signup from './component/body/Signup';
import Login from './component/body/Login';

class App extends Component {
  constructor(props){
    super(props);
    this.state = { 
                  form1:{
                          fname : '',
                          lname : '',
                          email : '',
                          password : ''
                        },

                  form2:{
                          email :'',
                          password : ''
                        }
                  };

    this.setValue=this.setValue.bind(this);
    this.onClick=this.onClick.bind(this);
  }

  setValue(value,key,select){
    let obj={};

    if(select === 'form1'){
      obj = this.state.form1;
      obj[key]=value;
  
    }
    else if(select === 'form2'){
      obj = this.state.form2;
      obj[key]=value;
      this.setState(obj);
    }
    
  }

  onClick(e){
    console.log(this.state);
  }  

  render() {
    return (
      <div className="App">
      <div id="left">
        <Signup setValue={this.setValue} onClick={this.onClick}/>
        </div>
        <div id="right">
        <Login setValue={this.setValue} onClick={this.onClick}/>
        </div>
      </div>
    );
  }
}

export default App;
