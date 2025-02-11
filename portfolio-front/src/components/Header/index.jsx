import { useState, useEffect, useContext } from "react";
// import { Link } from "react-router-dom";
import { RxCrossCircled } from "react-icons/rx";
import { FaBars } from "react-icons/fa";
import LinkContext from "../../context/activeLinkContext";
import "./index.css";

const Header = ({ changeTheme }) => {
  const [navSmallOpen, setNavSmallOpen] = useState(false);
  const { theme } = changeTheme;
  const { activeLink, setLink } = useContext(LinkContext);

  const toggleNavbar = () => {
    setNavSmallOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        { id: "/", ref: document.getElementById("home") },
        { id: "/#journey", ref: document.getElementById("journey") },
        { id: "/#Projects", ref: document.getElementById("Projects") },
        {
          id: "/#certifications",
          ref: document.getElementById("certifications"),
        },
        { id: "/#contactMe", ref: document.getElementById("contactMe") },
      ];

      for (let section of sections) {
        if (section.ref) {
          const { top, bottom } = section.ref.getBoundingClientRect();
          if (
            top <= window.innerHeight / 2 &&
            bottom >= window.innerHeight / 2
          ) {
            setLink(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [setLink]);

  return !navSmallOpen ? (
    <div className="navbar-container">
      <div className="navback">
        <nav className={`navbar navbar-${theme}`}>
          <FaBars onClick={toggleNavbar} className={`nav-icon-bars-${theme}`} />
          <div className="anchors-container-lg">
            <a
              href="/"
              className={
    
                activeLink === "/"
                  ? `active-link-${theme} anchors-${theme}`
                  : `anchors-${theme}`
              }
            >
              HOME
            </a>
            <a
              href="/#journey"
              className={
                activeLink === "/#journey"
                  ? `active-link-${theme} anchors-${theme}`
                  : `anchors-${theme}`
              }
            >
              JOURNEY
            </a>
            <a
              href="/#Projects"
              className={
                activeLink === "/#Projects"
                  ? `active-link-${theme} anchors-${theme}`
                  : `anchors-${theme}`
              }
            >
              PROJECTS
            </a>
            <a
              href="/#certifications"
              className={
                activeLink === "/#certifications"
                  ? `active-link-${theme} anchors-${theme}`
                  : `anchors-${theme}`
              }
            >
              CERTIFICATIONS
            </a>
            <a
              href="/#contactMe"
              className={
                activeLink === "/#contactMe"
                  ? `active-link-${theme} anchors-${theme}`
                  : `anchors-${theme}`
              }
            >
              CONTACT
            </a>
          </div>
        </nav>
      </div>
    </div>
  ) : (
    <div className="navbar-container">
      <nav className={`navbar-open-sm-${theme}`}>
        <RxCrossCircled
          onClick={toggleNavbar}
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
          <a href="/#certifications" className={`anchors-${theme}`}>
            CERTIFICATIONS
          </a>
          <hr className={`hr-line-${theme}`} />
          <a href="/#contactMe" className={`anchors-${theme}`}>
            CONTACT
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Header;
