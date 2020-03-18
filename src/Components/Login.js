import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import "../App.css";

export default class Login extends Component {
  constructor(props) {
    super(props);
    let loggedIn = false;
    this.state = {
      email: "",
      password: "",
      errorMsg: "",
      loggedIn
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  onSubmit(e) {
    e.preventDefault();
    const { email, password } = this.state;
    //Login Auth
    if (email === "hruday@gmail.com" && password === "hruday123") {
      localStorage.setItem("token", "hsjjhsjdklakjey");
      this.setState({
        loggedIn: true
      });
    } else {
      this.setState({
        errorMsg: "Please check email and password"
      });
    }
  }
  render() {
    if (this.state.loggedIn) {
      return (
        <Redirect
          to={{
            pathname: "/Components/Dashboard/EmployeeList",
            state: this.props.users
          }}
        />
      );
    }
    return (
      <div className="login-widget">
        <h1> SignIn</h1>

        <p className="login-error">{this.state.errorMsg}</p>

        <form onSubmit={this.onSubmit}>
          <label>Email </label> <br />
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={this.state.email}
            className="form-element"
            onChange={this.onChange}
          />
          <br />
          <label>password</label> <br />
          <input
            type="password"
            placeholder="password"
            name="password"
            value={this.state.password}
            className="form-element"
            onChange={this.onChange}
          />
          <br />
          <input type="submit" />
        </form>
      </div>
    );
  }
}
