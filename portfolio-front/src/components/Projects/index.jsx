import Slider from "react-slick";
import { motion } from "framer-motion";
import Loader from "react-loader-spinner";
import useApiCollection from "../../hooks/useApiCollection";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./index.css";

const sliderSettings = {
  dots: true,
  infinite: true,
  autoplay: true,
  speed: 700,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    { breakpoint: 1040, settings: { slidesToShow: 2 } },
    { breakpoint: 700, settings: { slidesToShow: 1 } },
  ],
};

const Projects = () => {
  const { data: projectList, isLoading, error } = useApiCollection("/api/get-projects");

  return (
    <section className="section-block" id="Projects">
      <h2 className="section-head">Projects</h2>
      {isLoading ? (
        <center><Loader height={70} width={70} /></center>
      ) : error ? (
        <p className="error-heading">Error Fetching Projects!!!</p>
      ) : projectList.length ? (
        <Slider {...sliderSettings}>
          {projectList.map((project) => (
            <div key={project._id} className="slider-item-wrap">
              <motion.article className="project-card glass-panel" whileHover={{ y: -6 }}>
                <h3>{project.projectName}</h3>
                <p className="meta">{project.technologiesUsed.join(", ")}</p>
                <p>{project.projectDescription}</p>
                <div className="card-links">
                  {project.githubLink && <a href={project.githubLink} target="_blank" rel="noreferrer">GitHub</a>}
                  {project.publishLink && <a href={project.publishLink} target="_blank" rel="noreferrer">Live Demo</a>}
                </div>
              </motion.article>
            </div>
          ))}
        </Slider>
      ) : (
        <p className="error-heading">No Projects To Show Up!!!</p>
      )}
    </section>
  );
};

export default Projects;
