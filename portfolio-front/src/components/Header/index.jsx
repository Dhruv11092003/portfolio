import { Component } from "react";
import { Link } from "react-router-dom";
import Switch from "react-switch";
import { RxCrossCircled } from "react-icons/rx";
import { FaBars } from "react-icons/fa";
import LinkContext from "../../context/activeLinkContext";
import { motion } from "framer-motion";
import "./index.css";

class Header extends Component {
  state = {
    navSmallOpen: false,
  };

  toggleNavbar = () => {
    // const {navSmallOpen}=this.state
    this.setState((prev) => ({ navSmallOpen: !prev.navSmallOpen }));
  };

  render() {
    const { changeTheme } = this.props;
    const { theme } = changeTheme;
    const { navSmallOpen } = this.state;
    console.log(this.props);
    return !navSmallOpen ? (
      <div className="navbar-container">
        <div className="navback">
          <nav className={`navbar navbar-${theme}`}>
            <FaBars
              onClick={this.toggleNavbar}
              className={`nav-icon-bars-${theme}`}
            />
            <LinkContext.Consumer>
              {(value) => {
                const { activeLink, setLink } = value;
                const setActiveLink = (link) => {
                  setLink(link);
                };
                return (
                  <div className="anchors-container-lg">
                    <a
                      href="/"
                      className={
                        activeLink === "/"
                          ? `active-link-${theme} anchors-${theme}`
                          : `anchors-${theme}`
                      }
                      onClick={() => setActiveLink("/")}
                    >
                      HOME
                    </a>
                    <a
                      href="#journey"
                      className={
                        activeLink === "/#AboutMe"
                          ? `active-link-${theme} anchors-${theme}`
                          : `anchors-${theme}`
                      }
                      onClick={() => setActiveLink("/#journey")}
                    >
                      JOURNEY
                    </a>
                    <a
                      href="#Projects"
                      className={
                        activeLink === "/#Projects"
                          ? `active-link-${theme} anchors-${theme}`
                          : `anchors-${theme}`
                      }
                      onClick={() => setActiveLink("/#Projects")}
                    >
                      PROJECTS
                    </a>
                    <a
                      href="#certifications"
                      className={`anchors-${theme}`}
                      onClick={() => setActiveLink("/#certifications")}
                    >
                      CERTIFICATIONS
                    </a>
                    <a
                      href="#contactMe"
                      className={`anchors-${theme}`}
                      onClick={() => setActiveLink("/#contactMe")}
                    >
                      CONTACT
                    </a>
                  </div>
                );
              }}
            </LinkContext.Consumer>
          </nav>
        </div>
      </div>
    ) : (
      <div className="navbar-container">
        <nav className={`navbar-open-sm-${theme}`}>
          <RxCrossCircled
            onClick={this.toggleNavbar}
            className={`nav-icon-cross-${theme}`}
          />
          <div className="anchors-container-sm">
            <a href="/" className={`anchors-${theme}`}>
              HOME
            </a>
            <hr className={`hr-line-${theme}`} />
            <a href="/#journey" className={`anchors-${theme}`}>
              JOURNEY
            </a>
            <hr className={`hr-line-${theme}`} />
            <a href="/#Projects" className={`anchors-${theme}`}>
              PROJECTS
            </a>
            <hr className={`hr-line-${theme}`} />
            <a href="/#contactMe" className={`anchors-${theme}`}>
              CONTACT
            </a>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;
