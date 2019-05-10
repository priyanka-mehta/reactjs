import React, { Component } from 'react';
import Select from 'react-select';
import { FaRegTimesCircle, FaArrowRight } from 'react-icons/fa';

import './../App.css'

const options = [
  { value: 'java', label: 'JAVA' },
  { value: 'reactjs', label: 'ReactJS' },
  { value: 'angularjs', label: 'AngularJS' },
  { value: 'vuejs', label: 'VueJS' },
  { value: 'python', label: 'Python' },
  { value: 'php', label: 'PHP' },
  { value: 'c', label: 'C' },
  { value: 'c++', label: 'C++' }
];

class Reactselect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: [],
      multi: false,
    }
  }

  handleChange = (selectedOption) => {
    this.setState({ selectedOption })
  }

  onClick(value) {
    this.setState({ multi: value, selectedOption: [] })
  }

  removeSelected(selected) {
    if (this.state.multi === true) {
      const selectedOption = [...this.state.selectedOption];
      const finalSelectedSubject = selectedOption.filter(x => x.value !== selected.value);
      this.setState({ selectedOption: finalSelectedSubject })
    }
    else {
      this.setState({ selectedOption: {} })
    }
  }

  render() {
    const { selectedOption, multi } = this.state;
    return (
      <div className='wrapper'>
        <h1><center>React-Select</center></h1>
        <div className='radio'>
          <input
            type='radio'
            name='multi'
            onChange={(e) => this.onClick(false)}
            checked={this.state.multi === false ? true : false}
          />
          Single
          <input
            className='input'
            type='radio'
            name='multi'
            onChange={(e) => this.onClick(true)}
          />
          Multiple
        </div>
        <br />
        <div className='select'>
          <Select
            isMulti={multi === false ? false : true}
            value={selectedOption}
            onChange={this.handleChange}
            options={options}
          />
          <br />
        </div>
        <div>
          {multi === true ?
            <div>
              {selectedOption !== null
                ?
                <div >
                  {selectedOption.map((i, key) =>
                    <div key={key} className='selected-data'>
                      <FaArrowRight /> {i.label}
                      <FaRegTimesCircle className='cancel-btn' onClick={() => this.removeSelected(i)} />
                    </div>
                  )}
                </div>
                :
                null
              }
            </div>
            :
            <div>
              {selectedOption.label
                ?
                <div className='selected-data'>
                  <FaArrowRight /> {selectedOption.label}
                  <span> <FaRegTimesCircle className='cancel-btn' onClick={() => this.removeSelected(selectedOption)} /></span>
                </div>
                :
                null
              }
            </div>
          }
        </div>
      </div>
    );
  }
}

export default Reactselect;

