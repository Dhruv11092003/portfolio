import Slider from "react-slick";
import "./index.css";
import Loader from "react-loader-spinner";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion";

const Certificates = () => {
  const [error, setError] = useState(false);
  const [isLoading, setLoading] = useState(true);
  const [certificateList, setCertificate] = useState([]);

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
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
    const getCertificates = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/api/get-certificates`,
          {
            headers: { Accept: "application/json" },
          }
        );

        if (response.status === 200) {
          setCertificate(response.data);
        } else {
          setError(true);
        }
      } catch (e) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    getCertificates();
  }, []);

  return (
    <div style={{ backgroundColor: "black", padding: "20px" }} id="certifications">
      <motion.div
        initial={{ opacity: 0, y: 50 }} // Start slightly lower with 0 opacity
        whileInView={{ opacity: 1, y: 0 }} // Slide up when in view
        viewport={{ once: false, amount: 0.2 }} // Animates when 20% of it is visible
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="section-title">Certifications</h1>
        {isLoading ? (
          <center>
            <Loader height={80} width={80} />
          </center>
        ) : error ? (
          <h1 className="error-heading">Error Fetching Certificates!!!</h1>
        ) : certificateList.length > 0 ? (
          <Slider {...settings}>
            {certificateList.map((each) => (
              <center key={each.title}>
                <div className="certificate-list-item">
                  <div>
                    <h1 className="certificate-heading">{each.title}</h1>
                    <p className="certificate-techStack">
                      {each.technologiesCovered}
                    </p>
                    <p className="certificate-description">
                      {each.description}
                    </p>
                    <p className="certificate-link">
                      <a
                        href={each.verificationLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Verification Link
                      </a>
                    </p>
                  </div>
                </div>
              </center>
            ))}
          </Slider>
        ) : (
          <h1 className="section-title">No Certificates To Show Up!!!</h1>
        )}
      </motion.div>
    </div>
  );
};

export default Certificates;
