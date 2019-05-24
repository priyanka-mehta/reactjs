import React from 'react';
import { connect } from 'react-redux';
import { sayHello } from '../actions';

let Button = ({ whatsUp, stateObject, saySomething }) => (
  < div >
    <button onClick={saySomething}>Press to Dispatch First Action</button>
    <h2>{whatsUp}</h2>
    <button onClick={() => console.log('Redux State :', stateObject)}>Press to inspect STATE in console panel</button>
  </div >
)
const mapStateToProps = (state) => ({
  whatsUp: state.say,
  stateObject: state
})

const mapDispatchToProps = {
  saySomething: sayHello
}

Button = connect(
  mapStateToProps,
  mapDispatchToProps
)(Button)

export default Button;