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
    errorMessage: "",
    isLoading: false,
    redirectToAdminPanel: false,
  };

  setUsername = (e) => {
    this.setState({ username: e.target.value });
  };

  setPassword = (e) => {
    this.setState({ password: e.target.value });
  };

  submitForm = async (e) => {
    e.preventDefault();
    const { username, password } = this.state;

    if (!username.trim() || !password.trim()) {
      this.setState({ errorMessage: "Username and password are required." });
      return;
    }

    this.setState({ isLoading: true, errorMessage: "" });

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/adminLogin`,
        { adminName: username, password }
      );

      if (response.status === 200) {
        Cookies.set("jwt_token", response.data.jwtToken, {
          expires: 1,
        });
        this.setState({ redirectToAdminPanel: true });
      }
    } catch (error) {
      this.setState({
        errorMessage: "Invalid credentials or server error.",
      });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  render() {
    const {
      username,
      password,
      errorMessage,
      isLoading,
      redirectToAdminPanel,
    } = this.state;

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
          <div className="admin-card">
            <h1 className="heading-console">Admin Login</h1>
            <p className="subtext-console">
              Secure access to the administration panel.
            </p>

            <form onSubmit={this.submitForm} className="console-form">
              <div className="form-field">
                <label htmlFor="username" className="label-console">
                  Username
                </label>
                <input
                  id="username"
                  type="text"
                  value={username}
                  onChange={this.setUsername}
                  className="input-console"
                  placeholder="Enter your username"
                />
              </div>

              <div className="form-field">
                <label htmlFor="password" className="label-console">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={this.setPassword}
                  className="input-console"
                  placeholder="Enter your password"
                />
              </div>

              {errorMessage && (
                <p className="error-message-console">
                  {errorMessage}
                </p>
              )}

              <div className="button-container-console">
                <button
                  type="submit"
                  className="submit-btn-console"
                  disabled={isLoading}
                >
                  {isLoading ? "Logging in..." : "Login"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default AdminConsole;