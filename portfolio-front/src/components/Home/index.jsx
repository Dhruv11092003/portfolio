import React, { Component } from "react";
import Header from "../Header/index";
import AboutMeTimeline from "../Journey";
import Certificates from "../Certificates";
import Projects from "../Projects";
import { IoMdDownload } from "react-icons/io";
import { LiaWpexplorer } from "react-icons/lia";
import { motion } from "framer-motion";

import {
  FaLinkedin,
  FaFacebook,
  FaGithub,
  FaWhatsapp,
  FaTelegram,
} from "react-icons/fa";

import "./index.css";
import ContactMe from "../ContactMe/index";
import TechStack from "../TechStack";
class Home extends Component {
  downloadResume = () => {
    window.open(
      "https://drive.google.com/file/d/11J9GxTp_TJ1XrRhmzYABJe4ywEO7jmYC/view?usp=sharing"
    );
  };

  render() {
    const { changeTheme } = this.props;
    const { theme } = changeTheme;

    return (
      <div className="main-container">
        <Header changeTheme={changeTheme} />
        <div className="home-container"  id="home">
          <motion.div
            initial={{ opacity: 0, y: 50 }} // Start slightly lower with 0 opacity
            whileInView={{ opacity: 1, y: 0 }} // Slide up when in view
            viewport={{ once: false, amount: 0.2 }} // Animates when 20% of it is visible
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Intro Section */}
            <motion.div
              className="intro-container"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <motion.img
                src="main-img.png"
                alt="Dhruv Kulshrestha"
                className="profileImg"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8 }}
              />
              <div className="intro-detail-container">
                <motion.p
                  className={`intro-para-${theme}`}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  Hello! I'm
                </motion.p>
                <motion.h1
                  className={`name-heading-dark`}
                  initial={{ x: -100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  <span>DHRUV KULSHRESTHA</span>
                </motion.h1>
                <motion.p
                  className={`intro-para-${theme}`}
                  style={{ marginTop: "15px" }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  I'm Into <span>Full Stack Development</span>
                </motion.p>
                <div className="explore-container">
                  <button
                    onClick={this.downloadResume}
                    className="explore-resume-buttons hover:scale-105 transition-transform"
                  >
                    Download Resume <IoMdDownload className="icons" />
                  </button>
                  <a href="#AboutMe" className="explore-title">
                    Explore <LiaWpexplorer className="icons" />
                  </a>
                </div>
                {/* Social Links */}
                <motion.div
                  className=" social-link-container-sm social-link-container-lg "
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.8 }}
                >
                  {[
                    {
                      href: "https://linkedin.com/in/dhruv-kulshrestha11",
                      icon: <FaLinkedin />,
                    },
                    {
                      href: "https://www.facebook.com/dhruv.kulshrestha.92",
                      icon: <FaFacebook />,
                    },
                    {
                      href: "https://github.com/Dhruv11092003",
                      icon: <FaGithub />,
                    },
                    {
                      href: "https://wa.me/+919760349169",
                      icon: <FaWhatsapp />,
                    },
                    {
                      href: "https://t.me/dhruv11092003",
                      icon: <FaTelegram />,
                    },
                  ].map((link, idx) => (
                    <a
                      key={idx}
                      href={link.href}
                      className="icons hover:text-blue-500 hover:scale-110 transition-transform"
                    >
                      {link.icon}
                    </a>
                  ))}
                </motion.div>
              </div>
            </motion.div>

            {/* Skills Section */}
          </motion.div>
        </div>
        <div className="second-container" s>
          <TechStack />
          <AboutMeTimeline />
          <Projects />
          <Certificates />
          <ContactMe theme={theme} />
        </div>
      </div>
    );
  }
}

export default Home;
