import { Component } from "react";
import { Link } from "react-router-dom";
import Header from "../Header/index";
import { IoMdDownload } from "react-icons/io";
import { LiaWpexplorer } from "react-icons/lia";
import {
  FaLinkedin,
  FaFacebook,
  FaGithub,
  FaWhatsapp,
  FaTelegram,
} from "react-icons/fa";
import ProgressBar from "@ramonak/react-progress-bar";
import "./index.css";
import ContactMe from "../ContactMe/index";

const skills = [
  { id: 1, name: "HTML", label: "Intermediate", level: 70 },
  { id: 2, name: "CSS", label: "Intermediate", level: 60 },
  { id: 3, name: "JS", label: "Intermediate", level: 60 },
  { id: 4, name: "React.js", label: "Intermediate", level: 60 },
  { id: 5, name: "Node.js", label: "Intermediate", level: 60 },
  { id: 6, name: "SQL", label: "Intermediate", level: 70 },
  { id: 7, name: "Mongo DB", label: "Beginner", level: 50 },
  { id: 8, name: "Vue.js", label: "Beginner", level: 50 },
  { id: 9, name: "Python", label: "Beginner", level: 60 },
  { id: 10, name: "MS Power Automate", label: "Intermediate", level: 80 },
  { id: 11, name: "Powershell and Bash Scripting", label: "Beginner", level: 40 },
  { id: 12, name: "Git and CLI", label: "Intermediate", level: 60 },
  { id: 13, name: "Laravel", label: "Beginner", level: 40 },
  { id: 14, name: "Communication", label: "Good", level: 70 },
  { id: 15, name: "Collaborative Working", label: "Good", level: 80 },
];

class Home extends Component {
  downloadResume = () => {
    window.open(
      "https://drive.google.com/file/d/1Y56zWQTIxtSQLQ6ztE4uQIye2tz2aHGg/view?usp=drive_link"
    );
  };

  render() {
    const { changeTheme } = this.props;
    const { theme } = changeTheme;

    return (
      <div>
        <Header changeTheme={changeTheme} />
        <div className={`home-container home-container-${theme}`}>
          <div className="intro-container">
            <img
              src="./3.jpg"
              alt="Dhruv Kulshrestha"
              className="profileImg"
            />
            <div className="intro-detail-container">
              <p className={`intro-para-${theme}`}>Hello! I'm</p>
              <h1 className={`name-heading-${theme}`}>DHRUV KULSHRESTHA</h1>
              <p className={`intro-para-${theme}`} style={{ marginTop: "15px" }}>
                I'm Into Full Stack Development
              </p>
              <div className="explore-container">
                <button onClick={this.downloadResume} className="explore-resume-buttons">
                  Download Resume <IoMdDownload className="icons" />
                </button>
                <a href="#AboutMe" className="explore-title">
                  Explore <LiaWpexplorer className="icons" />
                </a>
              </div>
              <div className="social-link-container-lg">
                <a href="https://linkedin.com/in/dhruv-kulshrestha11" className="icons">
                  <FaLinkedin />
                </a>
                <a href="https://www.facebook.com/dhruv.kulshrestha.92" className="icons">
                  <FaFacebook />
                </a>
                <a href="https://github.com/Dhruv11092003" className="icons">
                  <FaGithub />
                </a>
                <a href="https://wa.me/+919760349169" className="icons">
                  <FaWhatsapp />
                </a>
                <a href="https://t.me/dhruv11092003" className="icons">
                  <FaTelegram />
                </a>
              </div>
            </div>
          </div>

          <div className="explore-button-container">
            <button onClick={this.downloadResume} className="explore-resume-buttons">
              Download Resume <IoMdDownload className="icons" />
            </button>
            <a href="#AboutMe" className="explore-title">
              Explore <LiaWpexplorer className="icons" />
            </a>
            <div className="social-link-container-sm">
              <a href="https://linkedin.com/in/dhruv-kulshrestha11" className="icons">
                <FaLinkedin />
              </a>
              <a href="https://www.facebook.com/dhruv.kulshrestha.92" className="icons">
                <FaFacebook />
              </a>
              <a href="https://github.com/Dhruv11092003" className="icons">
                <FaGithub />
              </a>
              <a href="https://wa.me/+919760349169" className="icons">
                <FaWhatsapp />
              </a>
              <a href="https://t.me/dhruv11092003" className="icons">
                <FaTelegram />
              </a>
            </div>
          </div>

          <div className="aboutMe-container" id="AboutMe">
            <div className="about-lg-container">
              <h1 className="headers">About Me</h1>
              <p className="about-para">
                I’m a passionate Full Stack Developer with a focus on the MERN stack, where I enjoy
                crafting dynamic, efficient web applications using React, Node.js, Express, and
                MongoDB. I have experience deploying projects on platforms like Vercel and am always
                exploring new tools and technologies to enhance my work. In addition to my
                development skills, I have a growing interest in AI and machine learning, actively
                learning and expanding my expertise in these areas. I’ve also worked with Vue.js,
                Laravel, and scripting languages like PowerShell and Bash, and have integrated
                automation solutions and services such as Adobe Sign. With a solid foundation in
                Git, SQL, and cloud technologies, I thrive on solving problems and delivering
                innovative solutions while staying open to learning and growing with every project
                <Link to="/AboutMe" style={{ textDecoration: "none" }}>
                  <span>. . . Know More</span>
                </Link>
              </p>
            </div>
            <div className="skill-lg-container">
              <h1 className="headers">Skills</h1>
          
              <ul className="skills-container">
                {skills.map((each) => (
                  <li key={each.id}>
                    <div className="skill-li">
                      <div>
                        <p>{each.name}</p>
                      </div>
                      <ProgressBar
                        completed={each.level}
                        customLabel={each.label}
                        bgColor="darkgrey"
                        height={20}
                        width={115}
                        labelSize={10}
                        className="progress-bar"
                      />
                    </div>
                  </li>
                ))}
              </ul>
              
            </div>
          </div>
        </div>
        <ContactMe theme={theme} />
      </div>
    );
  }
}

export default Home;
