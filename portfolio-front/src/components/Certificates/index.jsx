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

const Certificates = () => {
  const { data: certificateList, isLoading, error } = useApiCollection("/api/get-certificates");

  return (
    <section className="section-block" id="certifications">
      <h2 className="section-head">Certifications</h2>
      {isLoading ? (
        <center><Loader height={70} width={70} /></center>
      ) : error ? (
        <p className="error-heading">Error Fetching Certificates!!!</p>
      ) : certificateList.length ? (
        <Slider {...sliderSettings}>
          {certificateList.map((certificate) => (
            <div key={certificate.title} className="slider-item-wrap">
              <motion.article className="certificate-card glass-panel" whileHover={{ y: -6 }}>
                <h3>{certificate.title}</h3>
                <p className="meta">{certificate.technologiesCovered}</p>
                <p>{certificate.description}</p>
                <a href={certificate.verificationLink} target="_blank" rel="noreferrer">Verification Link</a>
              </motion.article>
            </div>
          ))}
        </Slider>
      ) : (
        <p className="error-heading">No Certificates To Show Up!!!</p>
      )}
    </section>
  );
};

export default Certificates;
