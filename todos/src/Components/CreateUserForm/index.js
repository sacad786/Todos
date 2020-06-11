import React, { Component } from 'react'
import { TextField, Button } from '@material-ui/core'
import { createUsersRequest } from '../../Containers/Users/action'

export class CreateUserForm extends Component {
    constructor(props) {
        super()
        this.state = {
            username: '',
            firstname: '',
            lastname: '',
        }
    }
    handleTextChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    clearForm(){
        this.setState({
            username:  "" ,
            firstname: "" ,
            lastname: ""
        })
    }

    handleFormChange(){
        const {username, firstname, lastname} = this.state
        const user = {
        user_name: username,
        first_name: firstname,
        last_name: lastname
        }
        if (!username || !firstname || !lastname) {
            return
        }
        this.props.dispatchUserRequest(createUsersRequest(user))
        this.clearForm()
    }
    render() {
        return (
            <div>
                <h1 align="center">Create Users</h1>
                <form align="center">
                    <TextField
                        id="outlined-basic"
                        name="username"
                        value={this.state.username}
                        onChange={this.handleTextChange.bind(this)}
                        label="Username"
                        variant="outlined"
                        style={{ padding:"10px"}}
                        size="small"
                    />
                    <TextField
                        id="outlined-basic"
                        name="firstname"
                        value={this.state.firstname}
                        onChange={this.handleTextChange.bind(this)}
                        label="Firstname"
                        variant="outlined"
                        style={{ padding:"10px"}}
                        size="small"
                    />
                    <TextField
                        id="outlined-basic"
                        name="lastname"
                        value={this.state.lastname}
                        onChange={this.handleTextChange.bind(this)}
                        label="Lastname"
                        variant="outlined"
                        style={{ padding:"10px"}}
                        size="small"
                    />
                    <Button
                        variant="contained"
                        color="secondary"
                        onClick={this.handleFormChange.bind(this)}
                        style={{ marginTop:"9px"}}
                        size="large"
                    >
                        Submit
                    </Button>
                </form>
            </div>
        )
    }
}

export default CreateUserForm
