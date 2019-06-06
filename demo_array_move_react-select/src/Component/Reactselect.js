import React, { Component } from 'react';
import Select, { components } from 'react-select';
import {
  FaRegTimesCircle,
  FaArrowRight,
  FaPizzaSlice,
  FaFacebookMessenger,
  FaFacebook,
  FaWhatsapp,
  FaSkype,
  FaTwitter,
  FaCookie,
  FaIceCream,
  FaCheese
} from 'react-icons/fa';
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

const statusOptions = [
  { value: "pizza", label: `Pizza`, icon: <FaPizzaSlice /> },
  { value: "cookie", label: `Cookie`, icon: <FaCookie /> },
  { value: "icecream", label: "Ice-cream", icon: <FaIceCream /> },
  { value: "cheese", label: "Cheese", icon: <FaCheese /> },
  { value: "facebook", label: "Facebook", icon: <FaFacebook /> },
  { value: "messanger", label: "Facebook Messenger", icon: <FaFacebookMessenger /> },
  { value: "whatsapp", label: "WhatsApp", icon: <FaWhatsapp /> },
  { value: "skype", label: "Skype", icon: <FaSkype /> },
  { value: "twitter", label: "Twitter", icon: <FaTwitter /> },
];

const customSingleValue = ({ data }) => (
  <div>
    {console.log(data)}
    {data.icon && <span>{data.icon}</span>}
    <span>{data.label}</span>
  </div>
);

const { Option } = components;
const IconOption = (props) => (
  <Option {...props}>
    {props.data.icon}&nbsp;
    {props.data.label}
  </Option>
);

class Reactselect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: [],
      multi: false,
      selectedIconOption: []
    }
  }

  handleChange = (selectedOption) => {
    this.setState({ selectedOption })
  }
  handleSelectedChange = (selectedOption) => {
    this.setState({ selectedIconOption: selectedOption })
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
            styles={{
              control: (base, state) => ({
                ...base,
                boxShadow: state.isFocused ? '#f47434' : 0,
                border: state.isFocused ? '1px solid #f47434' : '1px solid #ced4da',
                outline: 'none',
                '&:hover': {
                  border: state.isSelected ? '1px solid #f47434' : ''
                }
              }),
            }}
          />

          <Select
            options={statusOptions}
            onChange={this.handleSelectedChange}
            components={{ SingleValue: customSingleValue, Option: IconOption }}
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

