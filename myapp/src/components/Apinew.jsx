import axios from 'axios';
import React, { useState } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

const Apinew = () => {
    var [user, setuser] = useState([])

    axios.get("https://jsonplaceholder.typicode.com/posts")
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
                            <TableCell>id</TableCell>
                            <TableCell>Title</TableCell>
                            
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {user.map((val) => {
                            return (
                                <TableRow>
                                    <TableCell>{val.id}</TableCell>
                                    <TableCell>{val.title}</TableCell>
                                </TableRow>
                            )
                        })}



                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default Apinew