import React, { Component } from 'react'
import { connect } from 'react-redux'
import DisplayUsers from '../../Components/DisplayUsers'
import CreateUserForm from '../../Components/CreateUserForm'
import UpdateUserForm from '../../Components/UpdateUserForm'
import { getUsersRequest, createUsersRequest, updateUsersRequest, deleteUsersRequest } from './action'
import { Dialog, DialogActions, Button } from '@material-ui/core'


export class Users extends Component {
    constructor(props) {
        super()
        this.state = {
            openDialog: false,
            firstname: '',
            lastname: '',
            updateUser: null,
            deleteUserWarning:false,
            deleteUserId: null,
            userId: null
        }
    }
    componentWillMount() {
        this.props.dispatch(getUsersRequest())
    }

    handleUpdateUser(user){
        this.setState({
            openDialog:  true,
            updateUser: user
        })
    }

    handleCloseDialog() {
        this.setState({
            openDialog: false
        })
    }

    handleDeleteUserWarning(userId){
        this.setState({
            deleteUserWarning: true,
            deleteUserId: userId
        })
    }

    dispatchUserRequest(user) {
        this.props.dispatch(createUsersRequest(user))
    }

    dispatchUpdateUserRequest(user){
        this.props.dispatch(updateUsersRequest(user))
        this.handleCloseDialog()
    }

    deleteUserRequest(userId){
        this.props.dispatch(deleteUsersRequest(userId))
    }

    render() {
        const users = this.props.usersState.users || [];
        
        return (
            <div>
                <Dialog fullWidth onClose={this.handleCloseDialog.bind(this)} open={this.state.openDialog}>
                    <UpdateUserForm
                        user={this.state.updateUser}
                        dispatchUpdateUserRequest={this.dispatchUpdateUserRequest.bind(this)}
                    />
                    <DialogActions>
                        <Button onClick={this.handleCloseDialog.bind(this)}>x</Button>
                    </DialogActions>
                </Dialog>

                <CreateUserForm
                    dispatchUserRequest={this.dispatchUserRequest.bind(this)}
                />
                <DisplayUsers
                    Usersdata={users}
                     handleUpdateUser = {this.handleUpdateUser.bind(this)}
                    handleDeleteUserWarning = {this.handleDeleteUserWarning.bind(this)}
                />
            </div>
        )
    }
}

export default connect(state => ({
    usersState: state.users
}))(Users)
