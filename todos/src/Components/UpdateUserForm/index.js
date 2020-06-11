import React, { Component } from 'react'
import { TextField, Button } from '@material-ui/core'
import { updateUsersRequest } from '../../Containers/Users/action'

export class UpdateUserForm extends Component {
    constructor(props) {
        super()
        this.state = {
            firstname:null,
            lastname:null,
            showUpdateError: false
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

        if (!firstname && !lastname) {
            return this.setState({ 
                showUpdateError: true
            })
        }

        this.props.dispatchUpdateUserRequest(updateUsersRequest(user))
    }
    render() {
        return (
            <div>
                <p style={{color: 'red', textAlign: 'center' , display: (this.state.showUpdateError) ? 'block' : 'none'}}>User not updated</p>
                <form align="center" style={{ margin: "5%"}}>
                    <TextField
                        id="outlined-basic"
                        name="firstname"
                        value={this.state.firstname === null ? this.props.user.first_name : this.state.firstname}
                        onChange={this.handleTextChange.bind(this)}
                        label="Firstname"
                        variant="outlined"
                    />
                    <br/><br/>
                    <TextField
                        id="outlined-basic"
                        name="lastname"
                        value={this.state.lastname === null ? this.props.user.last_name : this.state.lastname}
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