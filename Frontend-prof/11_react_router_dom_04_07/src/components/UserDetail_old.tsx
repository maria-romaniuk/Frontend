
import React, { Component, ReactNode } from "react";

import { IUser } from "./UserList";


interface IProps {
    user: IUser;
  }

interface IUserDetail extends IUser{
   
    username: string;
    email: string;
    address: {
        city: string;
    };
    website: string;
}

export default class UserDetail extends Component<IProps, IUserDetail> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            ...props.user,
             // Используем данные пользрвателя из пропсов для инициализации состояния и добавления данных
            name: "",
            username: "",
            email: "",
            address: {
                city: "",
            },
            phone: "",
            website: "",
            company: {
                name: "",
            }

        }
    }
    render(): ReactNode {
        const { name, username, email, address, phone, website, company } = this.state;
        return (
            <div className="mt-4">
                <h1>{name}</h1>
                <p><strong>Username:</strong> {username}</p>
                <p><strong>Email:</strong> {email}</p>
                <p><strong>City:</strong> {address.city}</p>
                <p><strong>Phone:</strong> {phone}</p>
                <p><strong>Website:</strong> {website}</p>
                <p><strong>Company:</strong> {company.name}</p>
            </div>

        )
    }
}

