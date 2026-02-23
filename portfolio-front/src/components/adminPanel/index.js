import axios from "axios";
import { Component } from "react";
import Cookies from "js-cookie";
import { Navigate } from "react-router-dom";
import "./index.css";

class AdminPanel extends Component {
  state = {
    isCertificateMode: true,
    isLoading: false,
    message: "",
    isError: false,
    redirect: false,

    certificateData: {
      title: "",
      technologiesCovered: "",
      description: "",
      imageUrl: "",
      verificationLink: "",
    },

    projectData: {
      projectName: "",
      technologiesUsed: "",
      githubLink: "",
      publishLink: "",
      projectImagesLink: "",
      projectDescription: "",
    },
  };

  toggleFormMode = () => {
    this.setState((prev) => ({
      isCertificateMode: !prev.isCertificateMode,
      message: "",
      isError: false,
    }));
  };

  handleChange = (e, type) => {
    const { name, value } = e.target;

    this.setState((prevState) => ({
      [type]: {
        ...prevState[type],
        [name]: value,
      },
    }));
  };

  logout = () => {
    Cookies.remove("jwt_token");
    this.setState({ redirect: true });
  };

  handleSubmit = async (e) => {
    e.preventDefault();

    const jwtToken = Cookies.get("jwt_token");
    if (!jwtToken) {
      this.setState({
        message: "Session expired. Please login again.",
        isError: true,
      });
      return;
    }

    const { isCertificateMode, certificateData, projectData } = this.state;
    const endpoint = isCertificateMode
      ? "/api/add-certificate"
      : "/api/add-project";

    const payload = isCertificateMode ? certificateData : projectData;

    this.setState({ isLoading: true, message: "", isError: false });

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}${endpoint}`,
        payload,
        {
          headers: {
            Authorization: `Bearer ${jwtToken}`,
          },
        }
      );

      if (response.status === 201) {
        this.setState({
          message: "Upload successful.",
          isError: false,
          certificateData: {
            title: "",
            technologiesCovered: "",
            description: "",
            imageUrl: "",
            verificationLink: "",
          },
          projectData: {
            projectName: "",
            technologiesUsed: "",
            githubLink: "",
            publishLink: "",
            projectImagesLink: "",
            projectDescription: "",
          },
        });
      }
    } catch (error) {
      this.setState({
        message: "Upload failed. Please check the data or server.",
        isError: true,
      });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  render() {
    const {
      isCertificateMode,
      certificateData,
      projectData,
      isLoading,
      message,
      isError,
      redirect,
    } = this.state;

    if (redirect) {
      return <Navigate to="/AdminConsole" />;
    }

    return (
      <div className="admin-panel-wrapper">
        <div className="admin-panel-card">
          <div className="admin-header">
            <h1>Admin Dashboard</h1>
            <button onClick={this.logout} className="logout-btn">
              Logout
            </button>
          </div>

          <div className="toggle-section">
            <button
              className={`toggle-btn ${
                isCertificateMode ? "active" : ""
              }`}
              onClick={() =>
                this.setState({ isCertificateMode: true })
              }
            >
              Certificate
            </button>

            <button
              className={`toggle-btn ${
                !isCertificateMode ? "active" : ""
              }`}
              onClick={() =>
                this.setState({ isCertificateMode: false })
              }
            >
              Project
            </button>
          </div>

          <form onSubmit={this.handleSubmit} className="upload-form">
            {isCertificateMode ? (
              <>
                <input
                  type="text"
                  name="title"
                  value={certificateData.title}
                  onChange={(e) =>
                    this.handleChange(e, "certificateData")
                  }
                  placeholder="Certificate Title"
                  required
                />

                <input
                  type="text"
                  name="technologiesCovered"
                  value={certificateData.technologiesCovered}
                  onChange={(e) =>
                    this.handleChange(e, "certificateData")
                  }
                  placeholder="Technologies Covered"
                  required
                />

                <textarea
                  name="description"
                  value={certificateData.description}
                  onChange={(e) =>
                    this.handleChange(e, "certificateData")
                  }
                  placeholder="Description"
                  required
                />

                <input
                  type="text"
                  name="imageUrl"
                  value={certificateData.imageUrl}
                  onChange={(e) =>
                    this.handleChange(e, "certificateData")
                  }
                  placeholder="Image URL"
                  required
                />

                <input
                  type="text"
                  name="verificationLink"
                  value={certificateData.verificationLink}
                  onChange={(e) =>
                    this.handleChange(e, "certificateData")
                  }
                  placeholder="Verification Link"
                  required
                />
              </>
            ) : (
              <>
                <input
                  type="text"
                  name="projectName"
                  value={projectData.projectName}
                  onChange={(e) =>
                    this.handleChange(e, "projectData")
                  }
                  placeholder="Project Name"
                  required
                />

                <input
                  type="text"
                  name="technologiesUsed"
                  value={projectData.technologiesUsed}
                  onChange={(e) =>
                    this.handleChange(e, "projectData")
                  }
                  placeholder="Technologies Used"
                  required
                />

                <input
                  type="text"
                  name="githubLink"
                  value={projectData.githubLink}
                  onChange={(e) =>
                    this.handleChange(e, "projectData")
                  }
                  placeholder="GitHub Link"
                />

                <input
                  type="text"
                  name="publishLink"
                  value={projectData.publishLink}
                  onChange={(e) =>
                    this.handleChange(e, "projectData")
                  }
                  placeholder="Live Link"
                />

                <input
                  type="text"
                  name="projectImagesLink"
                  value={projectData.projectImagesLink}
                  onChange={(e) =>
                    this.handleChange(e, "projectData")
                  }
                  placeholder="Project Images (comma separated)"
                />

                <textarea
                  name="projectDescription"
                  value={projectData.projectDescription}
                  onChange={(e) =>
                    this.handleChange(e, "projectData")
                  }
                  placeholder="Project Description"
                  required
                />
              </>
            )}

            {message && (
              <p className={`form-message ${isError ? "error" : "success"}`}>
                {message}
              </p>
            )}

            <button
              type="submit"
              className="submit-btn"
              disabled={isLoading}
            >
              {isLoading ? "Uploading..." : "Submit"}
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default AdminPanel;