import React, { Component } from 'react'
import { connect } from 'react-redux'

export class Users extends Component {
    render() {
        const users = this.props.usersState.users
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
    usersState: state.usersReducer
})) (Users)
