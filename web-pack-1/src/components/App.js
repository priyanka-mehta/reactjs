import React, { Component } from 'react';
import Select from 'react-select';
import './style.css';

const options = [
  { value: 'gujarat', label: 'Gujarat' },
  { value: 'maharashtra', label: 'Maharashtra' },
  { value: 'rajasthan', label: 'Rajasthan' }
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: null
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(selected) {
    this.setState({ selected });
    console.log(selected);
  }

  //  componentDidMount() {
  //     fetch('https://restcountries.eu/rest/v2/all?fields=name;capital;/')
  //       .then(res => {
  //         return res.json();
  //       })
  //       .then(res => {
  //         console.log('res :', res);
  //         this.setState({ signup: { ...this.state.signup.country, country: res|| [] } });
  //       });
  //   }

  render() {
    return (
      <div>
        <h1 className='heading'>Select Demo</h1>
        <Select
          isMulti
          isSearchable
          value={this.state.selected}
          options={options}
          onChange={this.handleChange}
        />

         {/* <Row>
            <Col>Select Country</Col>
          </Row>
          <Row>
            <Col>
              <Select
                isSearchable
                options={this.state.signup.country}
                value={this.state.signup.country}
                onChange={this.onChangeCountry}
              />
            </Col>
          </Row> */}
      </div>
    )
  }
}

export default App;