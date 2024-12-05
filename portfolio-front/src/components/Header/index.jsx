import { Component } from "react";
import { Link } from "react-router-dom";
import Switch from "react-switch";
import { RxCrossCircled } from "react-icons/rx";
import { FaBars } from "react-icons/fa";
import LinkContext from "../../context/activeLinkContext";
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
    const { main, theme, isChecked } = changeTheme;
    const { navSmallOpen } = this.state;
    // console.log(theme)
    return !navSmallOpen ? (
      <nav className={`navbar navbar-${theme}`}>
        <div className={`theme-container-${theme}`}>
          <label style={{"font-size":"10px","marginBottom":"5px"}}>Light Mode</label>
          <Switch onChange={main} checked={isChecked} height={20} width={40} />
        </div>

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
                <Link
                  to="/"
                  className={
                    activeLink === "/"
                      ? `active-link-${theme} anchors-${theme}`
                      : `anchors-${theme}`
                  }
                  onClick={()=>setActiveLink("/")}
                >
                  Home
                </Link>
                <Link
                  to="/AboutMe"
                  className={
                    activeLink === "/AboutMe"
                      ? `active-link-${theme} anchors-${theme}`
                      : `anchors-${theme}`
                  }
                  onClick={()=>setActiveLink("/AboutMe")}
                >
                  About Me
                </Link>
                <Link
                  to="/Projects"
                  className={
                    activeLink === "/Projects"
                      ? `active-link-${theme} anchors-${theme}`
                      : `anchors-${theme}`
                  }
                  onClick={()=>setActiveLink("/Projects")}
                >
                  Projects
                </Link>
                <Link to="/#contactMe" className={`anchors-${theme}`} onClick={()=>setActiveLink("/")}>
                  Contact Me
                </Link>
              </div>
            );
          }}
        </LinkContext.Consumer>
      </nav>
    ) : (
      <nav className={`navbar-open-sm-${theme}`}>
        <RxCrossCircled
          onClick={this.toggleNavbar}
          className={`nav-icon-cross-${theme}`}
        />
        <div className="anchors-container-sm">
          <Link to="/" className={`anchors-${theme}`}>
            Home
          </Link>
          <hr className={`hr-line-${theme}`} />
          <Link to="/AboutMe" className={`anchors-${theme}`}>
            About Me
          </Link>
          <hr className={`hr-line-${theme}`} />
          <Link to="/Projects" className={`anchors-${theme}`}>
            Projects
          </Link>
          <hr className={`hr-line-${theme}`} />
          <Link to="/#contactMe" className={`anchors-${theme}`}>
            Contact Me
          </Link>
        </div>
      </nav>
    );
  }
}

export default Header;
