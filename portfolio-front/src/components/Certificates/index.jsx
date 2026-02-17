import Slider from "react-slick";
import Loader from "react-loader-spinner";
import ProjectCard from "../ui/ProjectCard";
import useApiCollection from "../../hooks/useApiCollection";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const sliderSettings = {
  dots: true,
  infinite: true,
  autoplay: true,
  speed: 600,
  slidesToShow: 2,
  slidesToScroll: 1,
  responsive: [{ breakpoint: 900, settings: { slidesToShow: 1 } }],
};

const Certificates = () => {
  const { data: certificateList, isLoading, error } = useApiCollection("/api/get-certificates");

  return (
    <section className="section-wrap" id="certifications">
      <h2 className="font-display text-3xl font-bold">Certifications</h2>
      {isLoading ? (
        <center className="mt-4"><Loader height={70} width={70} /></center>
      ) : error ? (
        <p className="mt-4 text-rose-500">Error Fetching Certificates!!!</p>
      ) : (
        <div className="mt-6">
          <Slider {...sliderSettings}>
            {certificateList.map((certificate) => (
              <div key={certificate.title} className="px-2 pb-2">
                <ProjectCard
                  title={certificate.title}
                  tech={certificate.technologiesCovered}
                  description={certificate.description}
                  links={[{ label: "Verification Link", href: certificate.verificationLink }]}
                />
              </div>
            ))}
          </Slider>
        </div>
      )}
    </section>
  );
};

export default Certificates;
