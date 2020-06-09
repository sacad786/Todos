import React, { Component } from 'react'
import { TextField, Button } from '@material-ui/core'
import { updateUsersRequest } from '../../Containers/Users/action'

export class UpdateUserForm extends Component {
    constructor(props) {
        super()
        this.state = {
            firstname: '',
            lastname: '',
        }
    }
    handleTextChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleFormChange(){
        const {firstname, lastname} = this.state
        const user ={
        first_name: firstname,
        last_name: lastname,
        id: this.props.user.id
        }

        this.props.dispatchUpdateUserRequest(updateUsersRequest(user))
    }
    render() {
        return (
            <div>
                <form style={{ margin: "100px"}}>
                    <TextField
                        id="outlined-basic"
                        name="firstname"
                        value={this.state.firstname || this.props.user.first_name}
                        onChange={this.handleTextChange.bind(this)}
                        label="Firstname"
                        variant="outlined"
                    />
                    <br/><br/>
                    <TextField
                        id="outlined-basic"
                        name="lastname"
                        value={this.state.lastname || this.props.user.last_name}
                        onChange={this.handleTextChange.bind(this)}
                        label="Lastname"
                        variant="outlined"
                    />
                    <br/><br/>
                    <Button
                        variant="contained"
                        color="secondary"
                        onClick={this.handleFormChange.bind(this)}
                    >
                        Submit
                    </Button>
                </form>
            </div>
        )
    }
}

export default UpdateUserForm