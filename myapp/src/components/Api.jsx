import axios from 'axios';
import React, { useState } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

const Api = () => {
    var [user, setuser] = useState([])
    
    axios.get("https://jsonplaceholder.typicode.com/users")
        .then((response) => {
            console.log(response.data)
        setuser(response.data)
    })
  return (
      <div>
          <TableContainer>
              <Table>
                  <TableHead>
                      <TableRow>
                          <TableCell>Name</TableCell>
                          <TableCell>username</TableCell>
                          <TableCell>City</TableCell>
                          <TableCell>Zipcode</TableCell>
                      </TableRow>
                  </TableHead>
                  <TableBody>
                      {user.map((val) => {
                          return (
                              <TableRow>
                                  <TableCell>{ val.name}</TableCell>
                                  <TableCell>{ val.username}</TableCell>
                                  <TableCell>{val.address.city}</TableCell>
                                  <TableCell>{ val.address.zipcode}</TableCell>
                              </TableRow>
                          )
                      })}
                      

                         
                  </TableBody>
              </Table>
          </TableContainer>
    </div>
  )
}

export default Api