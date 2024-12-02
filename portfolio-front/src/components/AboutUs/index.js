import "./index.css";
import Header from "../Header";
import { Link } from "react-router-dom";
import { Component } from "react";
import axios from "axios";
import React from "react";
import Slider from "react-slick";
import Loader from "react-loader-spinner";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class AboutUs extends Component {
  state = {
    certificateList: [],
    error: false,
    isLoading: true,
  };

  componentDidMount() {
    this.getCertificates();
  }

  getCertificates = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/get-certificates`,
        {
          headers: {
            Accept: "application/json", // Specify the expected response format
          },
        }
      );

      if (response.status === 200) {
        this.setState({ certificateList: response.data, isLoading: false });
      } else {
        this.setState({ isLoading: false, error: true });
        console.log("Error in Receiving Certificates");
      }
    } catch (e) {
      this.setState({ isLoading: false, error: true });
    }
  };

  render() {
    const { certificateList, isLoading ,error} = this.state;
    const { changeTheme } = this.props;
    const { theme } = changeTheme;
    const settings = {
      dots: false,
      infinite: true,
      autoplay: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      // arrows: true,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };

    return (
      <div className={`background-${theme}`}>
        <Header changeTheme={changeTheme} />
        <h1 className={`heading-container-${theme}`}>About Me</h1>
        <div className="main-info-container">
          <div className={`experience-container-${theme}`}>
            <h2 className={`work-title-${theme}`}>Work Experience</h2>
            <p className={`internship-details-${theme}`}>
              <strong>Software Developer Intern</strong> at Cybernetics System
              LLP (May 29, 2024 - August 31, 2024)
            </p>
            <p className={`responsibilities-title-${theme}`}>
              Responsibilities:
            </p>
            <ul className="responsibilities-list">
              <li>
                <strong>Scripting & Automation:</strong> Developed PowerShell
                and Bash scripts for system management and automated backups.
              </li>
              <li>
                <strong>Workflow Automation:</strong> Streamlined tasks using
                Power Automate workflows.
              </li>
              <li>
                <strong>Full-Stack Development:</strong>
                <ul>
                  <li>
                    Built features in Vue.js and Laravel, including Adobe Sign
                    integration and blogging system.
                  </li>
                  <li>
                    Integrated GreytHR APIs for employee onboarding/offboarding.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Google Cloud Reporting:</strong> Generated user activity
                reports with Google Admin SDK.
              </li>
              <li>
                <strong>API Development:</strong> Created FastAPI endpoints on
                Linux to interface with PowerShell.
              </li>
              <li>
                <strong>Data Automation:</strong> Automated data extraction and
                migration with Puppeteer.
              </li>
              <li>
                <strong>Crisis Management:</strong> Worked with Microsoft to
                resolve service outage disruptions.
              </li>
            </ul>
          </div>
          <div className={`education-container-${theme}`}>
            <h2 className={`education-title-${theme}`}>Education</h2>
            <div className={`card-${theme}`}>
              <h3>2024</h3>
              <p>
                <strong>Degree:</strong> Bachelor of Vocation (AI & Robotics)
                (UG)
              </p>
              <p>
                <strong>Institution:</strong> Dayalbagh Educational Institute,
                Agra
              </p>
              <p>
                <strong>CGPA:</strong> 9.568
              </p>
            </div>
            <div className={`card-${theme}`}>
              <h3>2021</h3>
              <p>
                <strong>Degree:</strong> Intermediate (Class XII)
              </p>
              <p>
                <strong>Institution:</strong> St. Andrews Public School, Agra
                (CBSE)
              </p>
              <p>
                <strong>Percentage:</strong> 91.6%
              </p>
            </div>
            <div className={`card-${theme}`}>
              <h3>2019</h3>
              <p>
                <strong>Degree:</strong> Matriculate (Class X)
              </p>
              <p>
                <strong>Institution:</strong> St. Andrews Public School, Agra
                (CBSE)
              </p>
              <p>
                <strong>Percentage:</strong> 90.2%
              </p>
            </div>
          </div>
        </div>
        <div>
          <h1 className="section-title">Certifications</h1>
          {isLoading ? (
            <center>
              <div>
                <Loader height={80} width={80} />
              </div>
            </center>
          ) : certificateList.length > 0 ? (

            <Slider {...settings}>
              {certificateList.map((each) => (
                <center>
                  <div key={each.title} className="certificate-list-item">
                    <div>
                      <h1 className="certificate-heading">{each.title}</h1>
                      <p className="certificate-techStack">
                        {each.technologiesCovered}
                      </p>
                      <p className="certificate-description">
                        {each.description}
                      </p>
                      <p className="certificate-link">
                        Verification Link:
                        <br />
                        <a
                          href={each.verificationLink}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {each.verificationLink}
                        </a>
                      </p>
                    </div>
                  </div>
                </center>
              ))}
            </Slider>
            )
           : (
            error?(<h1 className="error-heading">Error Fetching Certificates!!!</h1>):(
            <div>
              <h1 className="section-title">No Certificates To Show Up!!!</h1>
            </div>)
          )}
        </div>
        <Link to="/AdminConsole" className="admin-link">
          <button className={`admin-button-${theme}`}>Admin Console</button>
        </Link>
      </div>
    );
  }
}

export default AboutUs;
