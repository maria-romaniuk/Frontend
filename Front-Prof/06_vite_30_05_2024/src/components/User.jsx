import React, { Component } from 'react';


export class User extends Component {
    render() {
        const { name, email, address:{city}, company:{name: companyName}} = this.props.person;
        return (
            <div>
                <div>{name}</div>
                <div>{email}</div>
                <div>{city}</div>
                <div>{companyName}</div>
            </div>
        )
    }
}

export default User