import { Link } from "react-router-dom";
import { IMAGES } from "../../../shared";
import "./Footer.scss";

const Footer: React.FC = () => {
  return (
    <div>
      <section className="home-footer">
        <div className="container">
          <div className="logo-footer">
            <Link to="/">
              <img src={IMAGES.logoFooter} alt="ERM" />
            </Link>
          </div>
          <p>
            Copyright © 2000 - 2025 The ERM International Group Limited, All
            rights reserved
          </p>
        </div>
      </section>
    </div>
  );
};

export default Footer;
