// import React, { useState } from 'react';

// import './../App.css';

// function Hooks() {
//   const [count, setCount] = useState(0);
//   const [age, setAge] = useState(20);
//   const [fruit, setFruit] = useState('banana');
//   const [todos, setTodos] = useState([{ text: 'Learn Hooks' }]);

//   return (

//     <div className='Main'>

//       <button onClick={() => setCount(count + 1)}>Click me to increase count</button>
//       <p> You clicked {count} times. </p>

//       <button onClick={() => setAge(age + 1)}>Click me to increase Age</button>
//       <p>Your age is {age}</p>

//       <button onClick={() => setFruit('Mango')}>Click me to change your favourite fruit</button>
//       <p>Your favourite fruit is {fruit}</p>

//       <button onClick={() => setTodos([...todos, { text: 'Learn Context' }])}>Your todos</button>
//       <div>{todos.map((i, key) => <div key={key}>{i.text}<br /></div>)} </div>

//     </div>
//   )
// }

// export default Hooks;
//-----------------------------------------------------------------------------------
// import React, { useState, useEffect } from 'react';

// function Hooks() {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     document.title = `You clicked ${count} times`;
//   });

//   return (
//     <div>
//       <p>You clicked {count} times</p>
//       <button onClick={() => setCount(count + 1)}>
//         Click me
//       </button>
//     </div>
//   );
// }
// export default Hooks;
// --------------------------------------------------------------------------
import React from 'react';
class Hooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  componentDidMount() {
    console.log('Mount'); 
    document.title = `You clicked ${this.state.count} times`;
  }

  componentDidUpdate() {
    console.log('Update');
    document.title = `You clicked ${this.state.count} times`;
  }

  render() {
    return (
      <div className='Main'>
        <p>You clicked {this.state.count} times</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Click me
        </button>
      </div>
    );
  }
}
export default Hooks;
//--------------------------------------------------------------------