import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import "../../App.css";
export default class EmployeeList extends Component {
  constructor(props) {
    super(props);
    const token = localStorage.getItem("token");
    let loggedIn = true;
    if (token == null) {
      loggedIn = false;
    }
    this.state = {
      loggedIn
    };
  }
  render() {
    if (this.state.loggedIn === false) {
      return <Redirect to="/" />;
    }
    return (
      <div>
        <h1> EmployeeList page</h1>
        <table>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
          {this.props.location.state.map(user => (
            <tr>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.age}</td>
              <td>{user.gender}</td>
              <td>{user.email}</td>
              <td>{user.phoneNo}</td>
            </tr>
          ))}
        </table>
      </div>
    );
  }
}
