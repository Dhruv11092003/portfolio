import Slider from "react-slick";
import "./index.css";
import Loader from "react-loader-spinner";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion";

const Projects = () => {
  const [error, setError] = useState(false);
  const [isLoading, setLoading] = useState(true);
  const [projectList, setProjectList] = useState([]);

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 780,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  useEffect(() => {
    const getProjects = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/api/get-projects`,
          {
            headers: { Accept: "application/json" },
          }
        );

        if (response.status === 200) {
          setProjectList(response.data);
        } else {
          setError(true);
        }
      } catch (e) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    getProjects();
  }, []);

  return (
    <div
      style={{ backgroundColor: "black", padding: "20px" }}
      className="projects-container "
      id="Projects"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }} // Start slightly lower with 0 opacity
        whileInView={{ opacity: 1, y: 0 }} // Slide up when in view
        viewport={{ once: false, amount: 0.2 }} // Animates when 20% of it is visible
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="section-title">Projects</h1>
        {isLoading ? (
          <center>
            <Loader height={80} width={80} />
          </center>
        ) : error ? (
          <h1 className="error-heading">Error Fetching Projects!!!</h1>
        ) : projectList.length > 0 ? (
          <Slider {...settings}>
            {projectList.map((each) => (
              <center key={each._id}>
                <div className="project-list-item">
                  <div>
                    <h1 className="project-heading">{each.projectName}</h1>
                    <p className="project-techStack">
                      {each.technologiesUsed.join(", ")}
                    </p>
                    <p className="project-description">
                      {each.projectDescription}
                    </p>
                    <div className="project-links">
                      {each.githubLink && (
                        <a
                          href={each.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          GitHub Link
                        </a>
                      )}
                      {each.publishLink && (
                        <a
                          href={each.publishLink}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Published Link
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </center>
            ))}
          </Slider>
        ) : (
          <h1 className="section-title">No Projects To Show Up!!!</h1>
        )}
      </motion.div>
    </div>
  );
};

export default Projects;
