import { Button } from "antd";
import { Link } from "react-router-dom";
import { IMAGES, PATHS } from "../../shared";
import "./ErrorPage.scss";

const ErrorPage = () => {
  const renderBackBtn = () => {
    let backLink = PATHS.login;
    let backText = "Back to login";

    return (
      <Link to={backLink}>
        <Button type="primary" className="btn">
          {backText}
        </Button>
      </Link>
    );
  };

  return (
    <div className="error-page">
      <div className="error-inner">
        <h1>404</h1>
        <div className="page-not-found-img">
          <img src={IMAGES.pageNotFound} alt="Page Not Found" />
        </div>
        <h2>Page Not Found</h2>
        <p>Oops! The requested URL was not found on this server.</p>
        {renderBackBtn()}
      </div>
    </div>
  );
};

export default ErrorPage;
