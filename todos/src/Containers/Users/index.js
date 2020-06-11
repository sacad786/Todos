import React, { Component } from 'react'
import { connect } from 'react-redux'
import DisplayUsers from '../../Components/DisplayUsers'
import CreateUserForm from '../../Components/CreateUserForm'
import UpdateUserForm from '../../Components/UpdateUserForm'
import { getUsersRequest, createUsersRequest, updateUsersRequest, deleteUsersRequest, resetUserError } from './action'
import { Dialog, DialogActions, Button } from '@material-ui/core'
import SweetAlert from 'react-bootstrap-sweetalert';
import { DeleteBtnStyle, confirmBtnStyle, cancelBtnStyle } from '../../styles'

export class Users extends Component {
    constructor() {
        super()
        this.state = {
            openDialog: false,
            firstname: '',
            lastname: '',
            updateUser: null,
            deleteUserWarning: false,
            deleteUserId: null,
            userId: null
        }
    }
    componentWillMount() {
        this.props.dispatch(getUsersRequest())
    }

    handleUpdateUser(user) {
        this.setState({
            openDialog: true,
            updateUser: user
        })
    }

    handleCloseDialog() {
        this.setState({
            openDialog: false
        })
    }

    handleDeleteUserWarning(userId) {
        this.setState({
            deleteUserWarning: true,
            deleteUserId: userId
        })
    }

    resetApiErrors() {
        this.props.dispatch(resetUserError())
        this.setState({
            deleteUserWarning: false
        })
    }

    dispatchUserRequest(user) {
        this.props.dispatch(createUsersRequest(user))
    }

    dispatchUpdateUserRequest(user) {
        this.props.dispatch(updateUsersRequest(user))
        this.handleCloseDialog()
    }

    deleteUserRequest(userId) {
        this.props.dispatch(deleteUsersRequest(userId))
        this.setState({
            deleteUserWarning: false
        })
    }

    deleteUserAlert() {
        return <SweetAlert
            warning
            showCancel
            confirmBtnText="Yes, delete it!"
            confirmBtnStyle={DeleteBtnStyle}
            cancelBtnStyle={cancelBtnStyle}
            title="Are you sure?"
            onConfirm={this.deleteUserRequest.bind(this, this.state.deleteUserId)}
            onCancel={this.resetApiErrors.bind(this)}
            focusCancelBtn
        />
    }

    userCreatedSuccessAlert() {
        return <SweetAlert
            success
            title="user created"
            onConfirm={this.resetApiErrors.bind(this)}
            confirmBtnStyle={confirmBtnStyle}
        ></SweetAlert>
    }
    userCreatedUnSuccessfullyAlert() {
        return <SweetAlert
            danger
            title={this.props.usersState.error}
            onConfirm={this.resetApiErrors.bind(this)}
            confirmBtnStyle={DeleteBtnStyle}
            confirmBtnText="try again!"
        />
    }
    userDeletedSuccessAlert() {
        return <SweetAlert
            success
            title="user deleted successfully"
            onConfirm={this.resetApiErrors.bind(this)}
            confirmBtnStyle={confirmBtnStyle}
        ></SweetAlert>
    }
    userUpdatedSuccessAlert() {
        return <SweetAlert
            success
            title="user updated"
            onConfirm={this.resetApiErrors.bind(this)}
            confirmBtnStyle={confirmBtnStyle}
        ></SweetAlert>
    }

    render() {
        const users = this.props.usersState.users || [];

        return (
            <div>
                <Dialog fullWidth onClose={this.handleCloseDialog.bind(this)} open={this.state.openDialog}>
                    <DialogActions>
                        <Button onClick={this.handleCloseDialog.bind(this)}>x</Button>
                    </DialogActions>
                    <UpdateUserForm
                        user={this.state.updateUser}
                        dispatchUpdateUserRequest={this.dispatchUpdateUserRequest.bind(this)}
                    />
                </Dialog>

                <CreateUserForm
                    dispatchUserRequest={this.dispatchUserRequest.bind(this)}
                />
                <DisplayUsers
                    Usersdata={users}
                    handleUpdateUser={this.handleUpdateUser.bind(this)}
                    handleDeleteUserWarning={this.handleDeleteUserWarning.bind(this)}
                />
                {this.state.deleteUserWarning ? this.deleteUserAlert() : ''}
                {this.props.usersState.deleteUser ? this.userDeletedSuccessAlert() : ''}
                {this.props.usersState.user ? this.userCreatedSuccessAlert() : ''}
                {this.props.usersState.error ? this.userCreatedUnSuccessfullyAlert() : ''}
                {this.props.usersState.updateUser ? this.userUpdatedSuccessAlert() : ''}
            </div>
        )
    }
}

export default connect(state => ({
    usersState: state.users
}))(Users)
