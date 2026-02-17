import Slider from "react-slick";
import Loader from "react-loader-spinner";
import { motion } from "framer-motion";
import useApiCollection from "../../hooks/useApiCollection";
import ProjectCard from "../ui/ProjectCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const sliderSettings = {
  dots: true,
  infinite: true,
  autoplay: true,
  speed: 600,
  slidesToShow: 2,
  slidesToScroll: 1,
  responsive: [{ breakpoint: 920, settings: { slidesToShow: 1 } }],
};

const Projects = () => {
  const { data: projectList, isLoading, error } = useApiCollection("/api/get-projects");

  return (
    <section className="section-wrap" id="Projects">
      <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <h2 className="font-display text-3xl font-bold">Project Showcase</h2>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">Real products spanning AI, full-stack engineering, and cloud deployment.</p>
      </motion.div>

      {isLoading ? (
        <center className="mt-6"><Loader height={70} width={70} /></center>
      ) : error ? (
        <p className="mt-6 text-rose-500">Error Fetching Projects!!!</p>
      ) : (
        <div className="mt-8">
          <Slider {...sliderSettings}>
            {projectList.map((project) => (
              <div key={project._id} className="px-2 pb-2">
                <ProjectCard
                  title={project.projectName}
                  tech={project.technologiesUsed.join(" · ")}
                  description={project.projectDescription}
                  links={[
                    ...(project.githubLink ? [{ label: "GitHub", href: project.githubLink }] : []),
                    ...(project.publishLink ? [{ label: "Live Demo", href: project.publishLink }] : []),
                  ]}
                />
              </div>
            ))}
          </Slider>
        </div>
      )}
    </section>
  );
};

export default Projects;
