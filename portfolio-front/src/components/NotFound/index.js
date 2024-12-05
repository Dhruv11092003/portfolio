import "./index.css";

const NotFound = ({ theme }) => {
  return (
    <div className={`not-found-container not-found-container-${theme}`}>
      <h1 className={`not-found-heading not-found-heading-${theme}`}>
        404
      </h1>
      <p className={`not-found-text not-found-text-${theme}`}>
        Oops! The page you're looking for doesn't exist.
      </p>
      <a href="/" className={`not-found-link not-found-link-${theme}`}>
        Go back to Home
      </a>
    </div>
  );
};

export default NotFound;
