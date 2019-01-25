import React, { Component } from 'react';

class Contact extends Component {
  render() {
    const { params } = this.props.match
    return (
      <div className="App">
        Contact Us
        <p>{params.id}</p>
      </div>
    );
  }
}

export default Contact;