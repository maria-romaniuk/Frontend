import React, { Component } from 'react';
import { IUserJson } from './UserList';


export class User extends Component<{person: IUserJson}> {
    render() {
        const {name, email, address:{city},  phone, website} = this.props.person;
        // const { name, email, address:{city}, company:{name: companyName}} = this.props.person;
        return (
            <div className="text-left" style={{margin: "0 5px 5px 0", border:'1px solid #eee', padding:" 7px", width:'24%', borderRadius: '3px',}}>
                <div className="text-center ">{name}</div>
                <div className="text-center ">{email}</div>
                <div className="text-left ">tel.: {phone}</div>
                <div className="text-left ">web.: {website}</div>
                <div className="text-left ">city: {city}</div>
            </div>
        )
    }
}

export default User