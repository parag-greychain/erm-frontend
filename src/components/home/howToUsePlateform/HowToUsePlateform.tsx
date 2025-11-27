import { Button } from "antd";
import { IMAGES } from "../../../shared";
import "./HowToUsePlateform.scss";

const HowToUsePlateform = () => {
  return (
    <section className="home-learn-section">
      <div className="container learn-wrapper">
        <div className="learn-left">
          <h2>Learn how to use the platform</h2>

          <div className="video-grid">
            <div className="video-card">
              <div className="video-wrapper">
                <img
                  className="video-thumbnail"
                  src={IMAGES.videoOne}
                  alt="videoOne"
                />
                <div className="play-btn">
                  <img
                    className="play-icon"
                    src={IMAGES.playIcon}
                    alt="playIcon"
                  />
                </div>
              </div>
              <p className="video-title">
                Learn how to generate your impact assessment report using Report
                Generator Platform
              </p>
            </div>

            <div className="video-card">
              <div className="video-wrapper">
                <img
                  className="video-thumbnail"
                  src={IMAGES.videoTwo}
                  alt="videoTwo"
                />
                <div className="play-btn">
                  <img
                    className="play-icon"
                    src={IMAGES.playIcon}
                    alt="playIcon"
                  />
                </div>
              </div>
              <p className="video-title">
                How to integrate Sharepoint site with ERM AI Platform
              </p>
            </div>
          </div>
          <div className="center-btn-row">
            <Button type="primary" className="transparent-btn">
              SEE MORE
            </Button>
          </div>
        </div>

        <div className="learn-right">
          <h3>Training Resources</h3>

          <div className="training-list">
            <div className="training-card">
              <div className="doc-icon">
                <img src={IMAGES.documentIcon} alt="documentIcon" />
              </div>
              <div className="training-info">
                <h4>Client AI Usage Policy</h4>
                <p>45 pages</p>
              </div>
              <i className="erm-icon arrow-right-icon" />
            </div>

            <div className="training-card">
              <div className="doc-icon">
                <img src={IMAGES.pptIcon} alt="pptIcon" />
              </div>
              <div className="training-info">
                <h4>Platform Walkthrough</h4>
                <p>68 pages</p>
              </div>
              <i className="erm-icon arrow-right-icon" />
            </div>

            <div className="training-card">
              <div className="doc-icon">
                <img src={IMAGES.pptIcon} alt="pptIcon" />
              </div>
              <div className="training-info">
                <h4>Best practices for validating AI generated content</h4>
                <p>68 pages</p>
              </div>
              <i className="erm-icon arrow-right-icon" />
            </div>
            <div className="center-btn-row">
              <Button type="primary" className="transparent-btn">
                SEE MORE
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToUsePlateform;
