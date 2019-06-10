import React, { Component } from 'react';
import { Input } from 'reactstrap';

class InputFormat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: ''
    }
  }

  handleChange(value) {
    const re = /^[0-9\b]+$/;
    var new_number;
    if (value === '' || re.test(value)) {
      const zip = value.substring(0, 3);
      const middle = value.substring(3, 6);
      const last = value.substring(6, 10);
      var a = zip + middle + last
      this.setState({ number: a })

      // if (value.length > 6) {
      //   this.setState({ number: `(${zip}) ${middle}` })
      // }
      // else if (value.length > 3) {
      //   this.setState({ number: `(${zip}) ${middle}` })
      // }
      // else if (value.length > 0) {
      //   this.setState({ number: `(${zip})` })
      // }
      // if (a.length > 2) {
      //   // matches: 123 || 123-4 || 123-45
      //   new_number = a.substring(0, 3) + '-';
      //   this.setState({ number: new_number })
      //   if (a.length === 4 || value.length === 5) {
      //     // matches: 123-4 || 123-45
      //     new_number = this.state.number + a.substr(3);
      //     this.setState({ number: new_number })
      //   }
      // }
      // else {
      //   new_number = value;
      //   this.setState({ number: value })
      // }
      // if (value.length > 0 || value.length < 10) {
      //   if (value.length > 0 || value.length < 6) {
      //     console.log("less then 6");
      //     if (value.length > 0 || value.length < 3) {
      //       number = value.replace(/(\d\d\d)/, "($1)")     
      //     }
      //   }
      //   number = value.replace(/(\d\d\d)(\d\d\d)(\d\d\d\d)/, "($1) $2-$3")
      // }
      // this.setState({ number })


      // if (value.length > 0 || value.length <= 10) {
      //   // let number = value.replace(/(\d\d\d)/, "($1)")
      //   let number = value.replace(/(\d\d\d)(\d\d\d)(\d\d\d\d)/, "($1) $2-$3")
      //   this.setState({ number })
      // }

      // if (value.length > 0 || value.length < 6) {
      //   let second = value.replace(/(\d\d\d)(\d\d\d)/, "($1) $2")
      //   this.setState({ number: second })
      // }

    }


  }

  render() {
    return (
      <div className='input-format'>
        <center>
          <Input
            maxLength='10'
            placeholder='Enter number'
            value={this.state.number}
            onChange={(e) => this.handleChange(e.target.value)}
          />
        </center>
      </div>
    );
  }
}

export default InputFormat;

