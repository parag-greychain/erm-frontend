import { Button } from "antd";
import type { FC } from "react";
import { useNavigate } from "react-router-dom";
import { IMAGES, PATHS } from "../../../shared";
import "./Login.scss";

const Login: FC = () => {
  const navigate = useNavigate();

  return (
    <div className="login-container">
      {/* LEFT SECTION */}
      <div className="login-left">
        <img src={IMAGES.logo} alt="ERM Logo" className="erm-logo" />
        <div className="content-wrapper">
          <div className="title">
            Intelligent Impact.
            <br />
            Instant Answers.
          </div>

          <p>
            Generate rigorous impact assessments and get AI-powered answers to
            your toughest questions turning complexity into clarity in
            real-time.
          </p>
        </div>
      </div>

      {/* RIGHT SECTION */}
      <div className="login-right">
        <div className="login-box">
          <h3>Login</h3>

          <Button
            type="default"
            className="login-btn"
            onClick={() => navigate(PATHS.home)}
          >
            <img src={IMAGES.microsoft} alt="microsoft" /> Continue with
            Microsoft
          </Button>

          <div className="links">
            <a href="#">Contact Support</a>
            <a href="#">Privacy Policy</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
