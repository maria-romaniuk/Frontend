import { ChangeEvent, Component, ReactNode, RefObject, useRef } from "react";
import { IUser } from "./UserList";
import React from "react";


interface UserProps {
    user: IUser;
    deleteUser: () => void;
    editUser: (updatedUser: IUser) => void;
    index:number,
}

interface IUserState {
    isEdit: boolean;
    editedUser: IUser;
}

class User extends Component<UserProps, IUserState> {
    constructor(props: UserProps) {
        super(props);
        this.state = {
            isEdit: false,
            editedUser: { ...props.user },
        };
    }
    
    const [isEdit, setIsEdit] = React.useState(false);

    nameRef: RefObject<HTMLInputElement> = React.createRef();
    companyRef: RefObject<HTMLInputElement> = React.createRef();
    phoneRef: RefObject<HTMLInputElement> = React.createRef();

    
     handleClickSave = () => {
    if(this.textRef.current && this.phoneRef.current && this.companyRef.current){
      editUser(index, {
       name: this.nameRef.current.value,
       phone: this.phoneRef.current.value,
       company: this.companyRef.current.value
      });
    }
    setIsEdit(false);
  };

    render(): ReactNode {
       const { isEdit, editedUser } = this.state;
        
    return (
        <div className="card mb-3">
          <div className="card-body">
            {isEdit ? (
              <div>
                <input
                  type="text"
                //   value={editedUser.name}
                  ref={this.nameRef}
                 defaultValue={editedUser.name}
                  className="form-control mb-2"
                />
                <input
                  type="text"
                //   value={editedUser.company.name}
                ref={this.companyRef}
                defaultValue={editedUser.company.name}                  className="form-control mb-2"
                />
                <input
                  type="text"
                //   value={editedUser.phone}
                ref={this.phoneRef}
                defaultValue={editedUser.phone} 
                  className="form-control mb-2"
                />
                <button onClick={this.handleClickSave} className="btn btn-success btn-sm me-2">
                  Save
                </button>
              </div>
            ) : (
              <div className="d-flex align-items-center">
                <p className="mb-0" style={{ flexGrow: 1 }}>
                  {User.name}
                </p>
                <p className="mb-0" style={{ flexGrow: 1 }}>
                  {User.company.name}
                </p>
                <p className="mb-0" style={{ flexGrow: 1 }}>
                  {User.phone}
                </p>
                <button onClick={() => setIsEdit(true)} className="btn btn-warning btn-sm me-2">
                  Edit
                </button>
                <button onClick={deleteUser} className="btn btn-danger btn-sm">
                  Delete
                </button>
              </div>
            )}
          </div>
        </div>
      );
}}

export default User;


