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
        
       render() {
        return (
            <div
            className='card mb-3'
            style={{ boxShadow: "0 4px 8px rgba(0,0,0,0.1)" }}
          >
            <div className="card-body">
              {this.state.isEdit ? (
                <div>
                  <input className="form-control" name="" />
                  <button
                    onClick={handleClickSave}
                    className="btn btn-success btn-sm me-2"
                  >
                    Save
                  </button>
                </div>
              ) : (
                <div className="d-flex align-items-center">
                  <p
                    className={`mb-0 ${
                      isCompleted ? "text-decoration-line-through text-muted" : ""
                    }`}
                    style={{ flexGrow: 1 }}
                  >
                    {title}
                  </p>
                  <small className="text-muted me-5">
     Updated on: {new Date(updatedAt).toLocaleString()}
                  </small>
                  <input
                    checked={isCompleted}
                    onChange={() =>
                      editTask(index, {
                        title,
                        isCompleted: !isCompleted,
                        updatedAt: new Date().toISOString(),
                      })
                    }
                    type="checkbox"
                    className="form-check-input me-2"
                  />
                  <button
                    onClick={() => setIsEdit(true)}
                    className="btn btn-warning btn-sm me-2"
                  >
                    Edit
                  </button>
                  <button onClick={deleteTask} className="btn btn-danger btn-sm">
                    Del
                  </button>
                </div>
              )}
            </div>
          </div>
        );
      }
}}

export default User;


