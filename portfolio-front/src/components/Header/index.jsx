import { Component } from "react";
import { Link } from "react-router-dom";
import Switch from "react-switch";
import { RxCrossCircled } from "react-icons/rx";
import { FaBars } from "react-icons/fa";
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
          <label>Dark Mode</label>
          <Switch onChange={main} checked={isChecked} height={20} width={40}/>
        </div>
        <h1 className={`main-heading-${theme}`}>Portfolio</h1>
        <FaBars onClick={this.toggleNavbar} className={`nav-icon-bars-${theme}`}/>
        <div className="anchors-container-lg">
          <Link to="/"  className={`anchors-${theme}`} >Home</Link>
          <a href="#AboutMe"  className={`anchors-${theme}`}>About Me</a>
          <a href="#Projects"  className={`anchors-${theme}`}>Projects</a>
          <a href="#contactMe"  className={`anchors-${theme}`}>Contact Me</a>
        </div>
        

      </nav>
    ) : (
      <nav className={`navbar-open-sm-${theme}`}>
        <RxCrossCircled onClick={this.toggleNavbar} className={`nav-icon-cross-${theme}`}/>
        <div className="anchors-container-sm">
          <Link to="/" className={`anchors-${theme}`}>Home</Link>
          <hr className={`hr-line-${theme}`}/>
          <a href="#AboutMe" className={`anchors-${theme}`}>About Me</a>
          <hr className={`hr-line-${theme}`}/>
          <a href="#Projects" className={`anchors-${theme}`}>Projects</a>
          <hr className={`hr-line-${theme}`}/>
          <a href="#contactMe" className={`anchors-${theme}`}>Contact Me</a>
          
        </div>
        
      </nav>
    );
  }
}

export default Header;
