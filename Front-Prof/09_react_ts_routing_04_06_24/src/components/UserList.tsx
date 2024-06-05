import { Component } from "react";
import User from "./User";

interface IUserListState{
  users: IUserJson[],
  isLoading: boolean,
}
export interface IUserJson{
    id: number,
    name: string,
    email: string,
    address: {
    street: string,
    suite: string,
    city: string,
    zipcode: string,
    },
    company: {
      name: string,
      
      }
    phone: string,
  website: string,
}

// rce
export class UserList extends Component<Record<string, never>, IUserListState> { //ожидает описание объекта для работы с женериком
  constructor(props: Record<string, never>) {
    super(props);
    this.state = {
      users: [],
      isLoading: false,
    };
  }

  componentDidMount() {
    this.setState({ ...this.state, isLoading: true });
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ users: data, isLoading: false });
      });
  }

  render() {
    const { users, isLoading } = this.state;

    // if (isLoading) {
    //   return <div>Loading...</div>;
    // }

    // return (
    //   <div>
    //     {users.map((user) => (
    //       <p key={user.id}>{user.name}</p>
    //     ))}
    //   </div>
    // );

    return isLoading ? (
      <div className="spinner-border text-primary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
      // <div>Loading...</div>
    ) : (
      <div className="users-list d-flex flex-wrap justify-content-between">
        {users.map((user) => (
          <User key={user.id} person={user} />
          // <p key={user.id}>{user.name}</p>
        ))}
      </div>
    );
  }
}

export default UserList;
