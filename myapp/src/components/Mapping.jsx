import React, { useState } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

const Mapping = () => {
    var [names, setnames] = useState(
        [
            { 'name': "Tiya", 'age': "18" },
            { 'name': "Riya", 'age': "19" },
            { 'name': "Siyaa", 'age': "20" },
            { 'name': "niyaa", 'age': "28" },

        ]
    )
  return (
      <div>
          <TableContainer>
              <Table>
                  <TableHead>
                      <TableRow>
                          <TableCell>Name</TableCell>
                          <TableCell>Age</TableCell>
                      </TableRow>
                  </TableHead>
                      <TableBody>
                          {names.map((val) => {
                              return (
                                  <TableRow>
                                  <TableCell>{val.name}</TableCell>
                                  <TableCell>{val.age}</TableCell>
                                  </TableRow>
                              )
                            })
                          }
                      </TableBody>
                  
              </Table>
          </TableContainer>
    </div>
  )
}

export default Mapping