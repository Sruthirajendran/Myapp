import React from 'react'
import { AppBar, Toolbar } from '@mui/material'
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
      <div>
          <AppBar>
              <Toolbar>
                  <Typography variant="h6" sx={{flexGrow:1}} >Myapp</Typography> &nbsp;
                  <Link to="/s">
                  <Button variant="contained" color="error">Sign up</Button> 
                  </Link>&nbsp;&nbsp;&nbsp;
                  <Link to="/">
                      <Button variant="contained" color="error">login</Button> 
                  </Link>&nbsp;&nbsp;&nbsp;
                  <Link to="/st">
                      <Button variant="contained" color="error">State</Button> 
                  </Link>&nbsp;&nbsp;&nbsp;
                  <Link to="/c">
                      <Button variant="contained" color="error">Counter</Button> 
                  </Link>&nbsp;&nbsp;&nbsp;
                  
                      <Button variant="contained" color="error">
                      <Link to="/g" style={{color:'white'}}>
                          Greeting
                          </Link>
                      </Button> &nbsp;&nbsp;&nbsp;
                  
                  <Link to="/m">
                      <Button variant="contained" color="error">Mapping</Button> 
                  </Link>&nbsp;&nbsp;&nbsp;
                  <Link to="/a">
                      <Button variant="contained" color="error">API</Button>
                  </Link>&nbsp;&nbsp;&nbsp;
                  <Link to="/ap">
                      <Button variant="contained" color="error">APINEW</Button>
                  </Link>&nbsp;&nbsp;&nbsp;
                  <Link to="/po">
                      <Button variant="contained" color="error">POKIMON</Button>
                  </Link>&nbsp;&nbsp;&nbsp;

                  
                  
              </Toolbar>
          </AppBar><br /><br /><br /><br /><br />
          
          
    </div>
  )
}

export default Navbar