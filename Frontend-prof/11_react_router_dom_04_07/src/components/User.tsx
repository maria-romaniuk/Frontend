import { ChangeEvent, Component } from "react";
import { IUser } from "./UserList";
import style from '../styles/user.module.css';

interface IProps{
  user: IUser;
  deleteUser: () => void;
  editUser: (user: IUser) => void;
  navigateToDetail: () => void;
}

interface IState {
  isEdit: boolean;
  name: string;
  company: string;
  phone: string;
}

 class User extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      isEdit: false,
      name: props.user.name,
      company: props.user.company.name,
      phone: props.user.phone,
      
    };
  }


  toggleEdit = () => {
    this.setState((prevState) => ({ ...prevState, isEdit: !prevState.isEdit }))

    // this.setState((prevState) => { 
    //     return {...prevState, isEdit: !prevState.isEdit}
    // })
  }

  handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    this.setState((prevState) => ({ ...prevState, [name]: value }))
    // this.setState((prevState) => ({ ...prevState, [e.target.name]: e.target.value }))
  }

  saveUser = () => {
    const { company, name, phone } = this.state;
    const { editUser, user } = this.props;

    const updatedUser = {
      ...user,
      name,
      company: { name: company },
      phone
    }

    editUser(updatedUser);
    this.toggleEdit();
  }
  navigateToDetail = () => {
    const history = useHistory();
    const { user } = this.props;
    history.push(`/user/${user.id}`); // Переход на страницу с деталями пользователя
  };

  render() {
    return (
      <div
        className={`card ${style.user_card} mb-3`}
        style={{ boxShadow: "0 4px 8px rgba(0,0,0,0.1)" }}
      >
        <div className="card-body">
          {this.state.isEdit ? (
            <div>
              <input className="form-control mb-2" name="name" value={this.state.name} onChange={this.handleChange} />
              <input className="form-control mb-2" name="company" value={this.state.company} onChange={this.handleChange} />
              <input className="form-control mb-2" name="phone" value={this.state.phone} onChange={this.handleChange} />
              <button
                onClick={this.saveUser}
                className="btn btn-success btn-sm me-2"
              >
                Save
              </button>
            </div>
          ) : (
            <div className="d-flex flex-column align-items-center">
              <h5 className="card-title">{this.props.user.name}</h5>
              <h6 className="card-subtitle mb-2 text-muted">{this.props.user.company.name}</h6>
              <p className="card-text">{this.props.user.phone}</p>
              <div>
                <button
                  onClick={this.toggleEdit}
                  className="btn btn-warning btn-sm me-2"
                >
                  Edit
                </button>
                <button onClick={this.props.deleteUser} className="btn btn-danger btn-sm">
                  Del
                </button>
                <button onClick={this.navigateToDetail} className="btn btn-success btn-sm">
                  Info
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}
export default User;