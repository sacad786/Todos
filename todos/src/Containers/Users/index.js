import React, { Component } from 'react'
import { connect } from 'react-redux'
import DisplayUsers from '../../Components/DisplayUsers'
import { GetUsersRequest } from './action'

export class Users extends Component {
    componentWillUnmount(){
        this.props.dispatch(GetUsersRequest())
    }
    render() {
        const users = this.props.usersState.users || []
        // const users = {
        //     "user_name": "sdf",
        //     "first_name": "fgdgf",
        //     "last_name": "dfgss"
        // }
        return (
            <div>
                <DisplayUsers
                    Usersdata={users}
                />
            </div>
        )
    }
}

export default connect(state => ({ 
    usersState: state.users
})) (Users)
