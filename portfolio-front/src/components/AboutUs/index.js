import AdminConsole from "../AdminConsole/index";
import "./index.css";
import Header from "../Header";
import { Link } from "react-router-dom";

const AboutUs = ({ changeTheme }) => {
  const { theme } = changeTheme;
  
  return (
    <div className={`background-${theme}`}>
      <Header changeTheme={changeTheme} />
      <div className="main-info-container">
      <h1 className="section-title">About Me</h1>
        <div className={`experience-container-${theme}`}>
          
          <h2 className={`work-title-${theme}`}>Work Experience</h2>
          <p className={`internship-details-${theme}`}>
            <strong>Software Developer Intern</strong> at Cybernetics System LLP (May 29, 2024 - August 31, 2024)
          </p>
          <p className={`responsibilities-title-${theme}`}>Responsibilities:</p>
          <ul className="responsibilities-list">
            <li>
              <strong>Scripting & Automation:</strong> Developed PowerShell scripts for Exchange Online management and Bash scripts for automated database backups, optimizing system workflows.
            </li>
            <li>
              <strong>Workflow Automation:</strong> Designed automated workflows using Power Automate to streamline repetitive tasks.
            </li>
            <li>
              <strong>Full-Stack Development:</strong>
              <ul>
                <li>Created front-end and back-end features with Vue.js and Laravel, including Adobe Sign integration and a dynamic blogging system.</li>
                <li>Integrated GreytHR APIs for seamless employee onboarding/offboarding on the company portal.</li>
              </ul>
            </li>
            <li>
              <strong>Google Cloud Reporting:</strong> Used Google Admin SDK APIs to generate detailed user activity reports.
            </li>
            <li>
              <strong>API Development:</strong> Built FastAPI endpoints on a Linux VM to interface with PowerShell scripts.
            </li>
            <li>
              <strong>Data Automation:</strong> Automated data extraction and migration with Puppeteer in JavaScript.
            </li>
            <li>
              <strong>Crisis Management:</strong> Coordinated with Microsoft representatives to resolve disruptions due to a service outage.
            </li>
          </ul>
        </div>
        <div className={`education-container-${theme}`}>
  <h2 className={`education-title-${theme}`}>Education</h2>
  <div className={`card-${theme}`}>
    <h3>2024</h3>
    <p><strong>Degree:</strong> Bachelor of Vocation (AI & Robotics) (UG)</p>
    <p><strong>Institution:</strong> Dayalbagh Educational Institute, Agra</p>
    <p><strong>CGPA:</strong> 9.568</p>
  </div>
  <div className={`card-${theme}`}>
    <h3>2021</h3>
    <p><strong>Degree:</strong> Intermediate (Class XII)</p>
    <p><strong>Institution:</strong> St. Andrews Public School, Agra (CBSE)</p>
    <p><strong>Percentage:</strong> 91.6%</p>
  </div>
  <div className={`card-${theme}`}>
    <h3>2019</h3>
    <p><strong>Degree:</strong> Matriculate (Class X)</p>
    <p><strong>Institution:</strong> St. Andrews Public School, Agra (CBSE)</p>
    <p><strong>Percentage:</strong> 90.2%</p>
  </div>
</div>
        <Link to="/AdminConsole" className="admin-link">
          <button className={`admin-button-${theme}`}>Admin Console</button>
        </Link>
      </div>
    </div>
  );
};

export default AboutUs;
