import React from 'react';

// class Context extends React.Component {
//   render() {
//     return <Toolbar theme="light" />;
//   }
// }
// function Toolbar(props) {
//   return (
//     <div>
//       <ThemedButton theme={props.theme} />
//     </div>
//   )
// }

// class ThemedButton extends React.Component {
//   render() {
//     console.log(this.props.theme);
//     return <button theme={this.props.theme} >Click me</button>
//   }
// }

// 

const ThemeContext = React.createContext('light');

class Context extends React.Component {
  render() {
    return (
      <ThemeContext.Provider value="dark">
        <Toolbar />
      </ThemeContext.Provider>
    );
  }
}

function Toolbar(props) {
  return (
    <div>
      <ThemedButton />
    </div>
  );
}

class ThemedButton extends React.Component {
  static contextType = ThemeContext;
  render() {
    return <input type='button' className='btn btn-primary' value='Click me' theme={this.context} />;
  }
}
export default Context;