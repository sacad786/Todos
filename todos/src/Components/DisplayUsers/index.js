import React from 'react'

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

export default function DisplayUsers(props) {
    const Users = props.Usersdata
    return (
        <div style={{margin: '110px'}}>
            <TableContainer component={Paper}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Username</TableCell>
                            <TableCell >Firstname</TableCell>
                            <TableCell >Lastname</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {Users.map((user) => (
                            <TableRow key={user.user_name}>
                                <TableCell component="th" scope="row">
                                    {user.user_name}
                                </TableCell>
                                <TableCell >{user.first_name}</TableCell>
                                <TableCell >{user.last_name}</TableCell>
                                {/* <TableCell >{user.carbs}</TableCell> */}
                                {/* <TableCell >{user.protein}</TableCell> */}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}
