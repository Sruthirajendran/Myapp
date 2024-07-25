import React, { useEffect, useState } from 'react'
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const Greeting = () => {
    const [val, newval] = useState(null);
    const React = () => {
        newval("React");
    }
    const Angular = () => {
        newval("Angular");
    }
    const vue = () => {
        newval("vue");
    }
    //useefect


    return (
        <div>
            
            <Typography variant="h6">Welcome to {val}</Typography><br /><br /><br />
            <Button variant='contained' color='primary' onClick={React}>React</Button><br /><br />
            <Button variant='contained' color='primary' onClick={Angular}>Angular</Button><br /><br />
            <Button variant='contained' color='primary' onClick={vue}>Vue</Button><br /><br />
        </div>
    )
}

export default Greeting