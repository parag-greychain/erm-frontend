import { IMAGES } from "../../../shared";
import "./Footer.scss";

const Footer: React.FC = () => {
  return (
    <div>
      <section className="home-footer">
        <div className="container">
          <div className="logo-footer">
            <img src={IMAGES.logoFooter} alt="ERM" />
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
