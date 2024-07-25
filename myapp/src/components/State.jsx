import React, { useState } from 'react'
import  Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


const State = () => {
    
    var [fname, setName] = useState("sruthi")
    const handleinput = (e) => {
        setName(e.target.value)
        console.log(fname)
    }
  var [val , setval]=useState()
  const submithandler = () => {
    console.log(val)
    setval(fname)
    
  }
  return (
      <div><br /><br />
      <Typography variant='h6'>welcome{val}</Typography>
      <TextField variant="outlined" onChange={handleinput} />
      <Button onClick={submithandler}>Submit</Button>
    </div>
  )
}

export default State