import React from 'react'

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Button, Fab } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit'
import DeleteIcon from '@material-ui/icons/Delete';

export default function DisplayUsers(props) {
    const Users = props.Usersdata
    return (
        <div style={{ margin: '110px' }}>
            <TableContainer component={Paper}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Username</TableCell>
                            <TableCell >Firstname</TableCell>
                            <TableCell >Lastname</TableCell>
                            <TableCell >Update</TableCell>
                            <TableCell >Delete</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {Users.map((user) => (
                            <TableRow key={user.user_name}>
                                <TableCell component="th" scope="row">
                                    {user.user_name}
                                </TableCell>
                                <TableCell>{user.first_name}</TableCell>
                                <TableCell>{user.last_name}</TableCell>
                                <TableCell><Fab color="secondary" aria-label="edit" size="medium"
                                 onClick={()=> {props.handleUpdateUser(user)}}
                                >
                                    <EditIcon />
                                </Fab></TableCell>
                                <TableCell><Fab
                                    style={{ color: "red", backgroundColor: "white" }}
                                    aria-label="edit" size="medium"
                                    onClick={()=>{props.handleDeleteUserWarning(user.id)}}
                                    >
                                    <DeleteIcon />
                                </Fab></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div >
    )
}
