import { Component } from "react";
import User from "./User";

// rce
export class UserList extends Component {
  constructor(props) {
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
      <div>
        {users.map((user) => (
          <User key={user.id} person={user} />
          // <p key={user.id}>{user.name}</p>
        ))}
      </div>
    );
  }
}

export default UserList;
