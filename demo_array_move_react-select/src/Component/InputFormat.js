import React, { Component } from 'react';
import { Input } from 'reactstrap';

class InputFormat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: '',
    }
  }

  handleChange(value) {
    
    const input = value.replace(/\D/g, '').substring(0, 10);

    const first = input.substring(0, 3);
    const middle = input.substring(3, 6);
    const last = input.substring(6, 10);

    if (input.length > 6) {
      this.setState({ number: `(${first}) ${middle}-${last}` })
    }
    else if (input.length > 3) {
      this.setState({ number: `(${first}) ${middle}` })
    }
    else if (input.length >= 0) {
      this.setState({ number: input })
    }
  }

  render() {
    return (
      <center className='input-format'>
        <Input
          placeholder='Enter contact number'
          value={this.state.number}
          onChange={(e) => this.handleChange(e.target.value)}
        />
      </center>
    );
  }
}

export default InputFormat;

