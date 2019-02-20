import React from 'react';
import Select from 'react-select';
import { debounce } from 'lodash';

const SelectApi = (props) => {
  const filterNames = debounce((inputValue, callback) => {
    fetch(props.url)
      .then((res) => {
        let tempArray = [], temp = [];
        if (inputValue === '') {
          temp = res.data;
          console.log(temp)
        } else {
          temp = res.data.filter(u => {
            if (u.name.toLowerCase().includes(inputValue.toLowerCase())) {
              return true;
            }
            return 0;
          })
        }
        temp.map(value => {
          tempArray.push({ value: value.id, label: value.name });
          return tempArray;
        })
        callback(tempArray);
      })
      .catch((error) => {
        console.log(error);
      });
  }, 1000)

  const handleInputChange = (inputValue) => {
    props.onChange(inputValue.label);
    return inputValue;
  };

  return (
    <div>
      <Select
        value={{ label: props.inputValue }}
        cacheOptions
        loadOptions={filterNames}
        defaultOptions
        onChange={handleInputChange}
      />
    </div>
  );
}


export default SelectApi;
