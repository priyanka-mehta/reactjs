import React, { useState } from 'react';
import { Button } from 'reactstrap';

import { Child1 } from './Child1';
import { Child2 } from './Child2';

export const Parent = () => {
  const [child, setChild] = useState('')

  const handleChange = e => {
    setChild(e.target.value)
  }

  return (
    <div>
      <center>
        <Child1 handleChange={handleChange} value={child} />
        <br />
        <Child2 handleChange={handleChange} value={child} />
        <br />
        <Button onClick={() => setChild('')}>Clear</Button>
      </center>
    </div>
  )
}
export default Parent;