import axios from "axios";

import { Component } from "react";
import Cookies from "js-cookie";
import "./index.css";
import { Navigate } from "react-router-dom";

class AdminPanel extends Component {
  state = {
    isCertificateMode: true,  // Toggle between certificate and project
    certificateData: {
      title: "",
      technologiesCovered: "",
      description: "",
      imageUrl: "",
      verificationLink: ""
    },
    projectData: {
      projectName: "",
      technologiesUsed: "",
      githubLink: "",
      publishLink: "",
      projectImagesLink: "",
      projectDescription: ""
    },
    redirect: false,

  };

  toggleFormMode = () => {
    this.setState((prevState) => ({
      isCertificateMode: !prevState.isCertificateMode
    }));
  };

  handleCertificateChange = (e) => {
    this.setState({
      certificateData: {
        ...this.state.certificateData,
        [e.target.name]: e.target.value
      }
    });
  };

  handleProjectChange = (e) => {
    this.setState({
      projectData: {
        ...this.state.projectData,
        [e.target.name]: e.target.value
      }
    });
  };


  Logout = () => {
    Cookies.remove("jwt_token");
    this.setState({ redirect: true });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const jwtToken = Cookies.get("jwt_token");
    if (!jwtToken) {
      alert("You must be logged in to upload!");
      return;
    }

    const { isCertificateMode, certificateData, projectData } = this.state;
    const endpoint = isCertificateMode ? "/api/add-certificate" : "/api/add-project";
    const data = isCertificateMode ? certificateData : projectData;

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}${endpoint}`,
        data,
        {
          headers: {
            Authorization: `Bearer ${jwtToken}`
          }
        }
      );
      if (response.status === 201) {
        alert("Upload successful!");
      }
    } catch (error) {
      console.error("Upload failed", error);
    }
  };

  render() {
    const { isCertificateMode, certificateData, projectData } = this.state;
    if (this.state.redirect) {
        return <Navigate to="/AdminConsole" />;
      }
    return (
      <div className="upload-form-container">
        <div className="toggle-switch">
          <label className="switch">
            <input
              type="checkbox"
              onChange={this.toggleFormMode}
              checked={!isCertificateMode}
            />
            <span className="slider round"></span>
          </label>
          <p>{isCertificateMode ? "Upload Certificate" : "Upload Project"}</p>
        </div>

        <form onSubmit={this.handleSubmit} className="upload-form">
          {isCertificateMode ? (
            <>
              <h2>Upload Certificate</h2>
              <input
                type="text"
                name="title"
                value={certificateData.title}
                onChange={this.handleCertificateChange}
                placeholder="Title"
                required
              />
              <input
                type="text"
                name="technologiesCovered"
                value={certificateData.technologiesCovered}
                onChange={this.handleCertificateChange}
                placeholder="Technologies Covered (comma separated)"
                required
              />
              <textarea
                name="description"
                value={certificateData.description}
                onChange={this.handleCertificateChange}
                placeholder="Description"
                required
              />
              <input
                type="text"
                name="imageUrl"
                value={certificateData.imageUrl}
                onChange={this.handleCertificateChange}
                placeholder="Image URL"
                required
              />
              <input
                type="text"
                name="verificationLink"
                value={certificateData.verificationLink}
                onChange={this.handleCertificateChange}
                placeholder="Verification Link"
                required
              />
            </>
          ) : (
            <>
              <h2>Upload Project</h2>
              <input
                type="text"
                name="projectName"
                value={projectData.projectName}
                onChange={this.handleProjectChange}
                placeholder="Project Name"
                required
              />
              <input
                type="text"
                name="technologiesUsed"
                value={projectData.technologiesUsed}
                onChange={this.handleProjectChange}
                placeholder="Technologies Used (comma separated)"
                required
              />
              <input
                type="text"
                name="githubLink"
                value={projectData.githubLink}
                onChange={this.handleProjectChange}
                placeholder="GitHub Link"
                
              />
              <input
                type="text"
                name="publishLink"
                value={projectData.publishLink}
                onChange={this.handleProjectChange}
                placeholder="Publish Link"
                
              />
              <input
                type="text"
                name="projectImagesLink"
                value={projectData.projectImagesLink}
                onChange={this.handleProjectChange}
                placeholder="Project Images Link (comma separated)"
                
              />
              <textarea
                name="projectDescription"
                value={projectData.projectDescription}
                onChange={this.handleProjectChange}
                placeholder="Project Description"
                required
              />
            </>
          )}
          <button type="submit" className="submit-button">Submit</button>
        </form>
        <button onClick={this.Logout}>Logout</button>
      </div>
    );
  }
}

export default AdminPanel;
