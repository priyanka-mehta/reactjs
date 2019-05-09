import React, { Component } from 'react';

// //First we will create a context
const MyContext = React.createContext();

//then create a provider component
class MyProvider extends Component {
  state = {
    name: 'Priyanka',
    age: '22',
    cool: false,
  }
  render() {
    return (
      <MyContext.Provider value={this.state}>
        {this.props.children}
      </MyContext.Provider>
    )
  }
}

const Family = () => (
  <center>
    <Person />
  </center>
)
class Person extends Component {

  render() {
    return (
      <center>
        <MyContext.Consumer>
          {(context) => (
            <>
              <p>Name : {context.name}</p>
              <p>Age : {context.age}</p>
            </>
          )}
        </MyContext.Consumer>
      </center>
    )
  }
}

class Context extends Component {
  render() {
    return (
      <MyProvider>
        <center className='Main'>
          <p>I'm in Context</p>
          <Family />
        </center>
      </MyProvider>
    )
  }
}

export default Context;