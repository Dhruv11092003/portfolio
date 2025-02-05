import React from "react";
import "./index.css";
import { motion } from "framer-motion";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaUser, FaBriefcase, FaGraduationCap } from "react-icons/fa";

const AboutMeTimeline = () => {
  return (
    <div className="timeline-container" id="journey">
      <h2 className="section-title">My Journey</h2>
      <motion.div
        initial={{ opacity: 0, y: 50 }} // Start slightly lower with 0 opacity
        whileInView={{ opacity: 1, y: 0 }} // Slide up when in view
        viewport={{ once: false, amount: 0.2 }} // Animates when 20% of it is visible
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <VerticalTimeline>
          {/* About Me Section */}
          <VerticalTimelineElement
            className="timeline-element"
            iconClassName="timeline-icon"
            icon={<FaUser />}
          >
            <div className="main-card animate-fade">
              <img src="aboutme.png" alt="About Me" className="main-image" />
              <div className="card-content">
                <h3 className="timeline-title">ABOUT ME</h3>
                <ul className="timeline-text">
                  <li>
                    Passionate MERN Stack Developer with expertise in
                    JavaScript, Node.js, React, and MongoDB.
                  </li>
                  <li>
                    Interested in AI & Robotics, constantly learning and
                    exploring emerging technologies.
                  </li>
                  <li>
                    Focused on building scalable, maintainable, and efficient
                    applications for real-world solutions.
                  </li>
                </ul>
              </div>
            </div>
          </VerticalTimelineElement>

          {/* Experience Section */}
          <VerticalTimelineElement
            className="timeline-element"
            iconClassName="timeline-icon"
            icon={<FaBriefcase />}
          >
            <div className="main-card animate-slide">
              <div className="card-content">
                <h3 className="timeline-title">EXPERIENCE</h3>
                <ul className="timeline-text">
                  <li>Software Developer Intern at Cybernetics System LLP.</li>
                  <li>
                    Worked on website maintenance, updates, and automation using
                    PowerShell.
                  </li>
                  <li>
                    Contributed to database automation, improving efficiency and
                    system performance.
                  </li>
                </ul>
              </div>
              <img
                src="experience.png"
                alt="Experience"
                className="main-image"
              />
            </div>
          </VerticalTimelineElement>

          {/* Education Section */}

          <VerticalTimelineElement
            className="timeline-element"
            iconClassName="timeline-icon"
            icon={<FaGraduationCap />}
          >
            <div className="main-card animate-zoom">
              <img src="education.png" alt="Education" className="main-image" />
              <div className="card-content">
                <h3 className="timeline-title">EDUCATION</h3>
                <ul className="timeline-text">
                  <li>
                    Bachelor of Vocation (AI & Robotics) Grade: 9.568 CGPA
                  </li>
                  <li> Intermediate (PCM) Grade: 91.6%</li>
                </ul>
              </div>
            </div>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </motion.div>
    </div>
  );
};

export default AboutMeTimeline;
