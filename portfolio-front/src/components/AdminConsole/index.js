import axios from "axios";
import Header from "../Header";
import { Component } from "react";
import Cookies from "js-cookie";
import { Navigate } from "react-router-dom";
import "./index.css";

class AdminConsole extends Component {
  state = {
    username: "",
    password: "",
    isEmpty: false,
    redirectToAdminPanel: false, 
  };

  setUsername = (e) => {
    this.setState({ username: e.target.value });
  };

  setPassword = (e) => {
    this.setState({ password: e.target.value });
  };

  sendData = async (data) => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/adminLogin`,
        data
      );
      if (response.status === 200) {
        Cookies.set("jwt_token", response.data.jwtToken);
        this.setState({ redirectToAdminPanel: true }); 
      } else {
        console.log(response.status);
      }
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  submitForm = (e) => {
    e.preventDefault();
    const { username, password } = this.state;
    if (username === "" || password === "") {
      this.setState({ isEmpty: true });
    } else {
      const payload = { adminName: username, password: password };
      this.sendData(payload);
    }
  };

  render() {
    const { username, password, isEmpty, redirectToAdminPanel } = this.state;
    const { changeTheme } = this.props;
    const { theme } = changeTheme;

    if (redirectToAdminPanel) {
      return <Navigate to="/AdminPanel" />;
    }

    return (
      <div>
        <Header changeTheme={changeTheme} />
        <div
          className={`admin-console-wrapper ${
            theme === "light" ? "theme-light" : "theme-dark"
          }`}
        >
          <form onSubmit={this.submitForm} className="console-form">
            <div className="form-field">
              <input
                value={username}
                id="username"
                placeholder="Enter Username"
                onChange={this.setUsername}
                className="input-console"
                required
              />
            </div>
            <div className="form-field">
              <input
                value={password}
                id="password"
                onChange={this.setPassword}
                required
                className="input-console"
                placeholder="Enter Password"
              />
            </div>
            {isEmpty && (
              <p className="error-message-console">
                Please fill the required details
              </p>
            )}
            <div className="button-container-console">
              <button type="submit" className="submit-btn-console">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default AdminConsole;
