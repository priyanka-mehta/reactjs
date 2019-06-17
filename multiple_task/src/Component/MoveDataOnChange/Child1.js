import React from 'react';
import { Input } from 'reactstrap';

export const Child1 = (props) => {
  return (
    <div className='col-3'>
      <Input
        value={props.value}
        placeholder='Enter Text'
        onChange={props.handleChange}
      />
    </div>
  )
}