import { Component } from "react";
import Header from "../Header";
import axios from "axios";
import Loader from "react-loader-spinner";
// import dotenv from 'dotenv'
import "./index.css";

class Projects extends Component {
  state = {
    projectList: [],
    isLoading: true,
    error: false,
  };

  componentDidMount() {
    this.getProjects();
  }

  getProjects = async () => {
    try{
    const response = await axios.get(
      `${process.env.REACT_APP_API_URL}/api/get-projects`
    );
    console.log(JSON.stringify(response));
    if (response) {
      this.setState({ projectList: response.data, isLoading: false });
    } else {
      this.setState({ isLoading: false, error: true });
    }
}catch(e){
    this.setState({ isLoading: false, error: true });
}
  };

  render() {
    const { changeTheme } = this.props;
    const { isLoading, projectList, error } = this.state;
    const { theme } = changeTheme;
    return (
      <div className="project-top-container">
        <Header changeTheme={changeTheme} />
        <div className={`project-container-${theme}`}>
          <h1 className={`heading-container-${theme}`}>Projects</h1>
          {isLoading ? (
            <center>
              <div>
                <Loader type="ThreeDots" height={50} width={50} color="#ffffff"/>
              </div>
            </center>
          ) : error ? (
            <center>
            <h1 className="project-heading" style={{"margin-top":"10%"}}>Error Fetching Projects</h1>
            </center>
          ) : (
            projectList.length===0?(<center><h1 className="project-heading" style={{"margin-top":"10%"}}>No Projects To Show!!</h1></center>):(
            <ul className={`project-card-container-${theme}`}>
              {projectList.map((each) => (
                <li key={each._id}>
                  <div className={`project-card-${theme}`}>
                  <div className={`project-card-items-${theme}`}>
                    <h1 className="project-heading">{each.projectName}</h1>
                    <p className="project-para">{each.technologiesUsed[0]}</p>
                 <div style={{"display":"flex","flexDirection":"column","alignItems":"center"}}>
                  {each.githubLink.length > 0 ? (
                    <a href={each.githubLink} target="blank" className="anchors">Github Link</a>
                  ) : (
                    ""
                  )}
                  {each.publishLink.length > 0 ? (
                    <a href={each.publishLink} target="blank" className="anchors">Published Link</a>
                  ) : (
                    ""
                  )}
                  </div>
                  </div>
                  <p className="project-para">{each.projectDescription}</p>
                  </div>
                </li>
                
              ))}
            </ul>
            )
          )}
        </div>
      </div>
    );
  }
}

export default Projects;
