import React, { useState } from 'react'
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const Counter = () => {
    const [count, setcount] = useState(0);
    const handleincrement = () => {
        setcount(count + 1);
    }
    const handledecrement = () => {
        setcount(count - 1);
    }
   

  return (
      <div>
          <br /><br /><br /><br />
          <Button variant='contained' color='primary' onClick={handleincrement}>add</Button><br /><br />
          <Typography variant="h6">current count:{count}</Typography><br /><br /><br />
          <Button variant='contained' color='secondary' onClick={handledecrement}>subtract</Button>
    </div>
  )
}

export default Counter