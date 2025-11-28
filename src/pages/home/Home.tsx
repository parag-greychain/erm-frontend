import React from "react";
import ChatInputPanel from "../../components/chat/chatInputPanel/ChatInputPanel";
import Faq from "../../components/home/faq/Faq";
import HowToUsePlateform from "../../components/home/howToUsePlateform/HowToUsePlateform";
import MyProjects from "../../components/home/myProjects/MyProjects";
import { IMAGES } from "../../shared";
import Footer from "./footer/Footer";
import "./Home.scss";

const Home: React.FC = () => {
  return (
    <div>
      <section className="hero">
        <div className="hero-body">
          <div className="logo-ai">
            <img src={IMAGES.logoWithAi} alt="Logo" />
          </div>
          <div className="container">
            <div className="chat-welcome">
              <div className="welcome-header">
                <div className="welcome-logo">
                  <img src={IMAGES.logoIcon} alt="ERM" />
                  <h1>Ask ERM AI</h1>
                </div>
                <p>Ask anything from the knowledge base</p>
              </div>
            </div>
            <ChatInputPanel />
          </div>
        </div>
      </section>

      <section className="home-page-body">
        <MyProjects />
        <section className="home-access-section">
          <div className="container">
            <h2>Access AI-powered tools</h2>
            <div className="access-row">
              <div
                className="card-full"
                style={{
                  backgroundImage: `url(${IMAGES.cardOneBg})`,
                }}
              >
                <div className="card-text">
                  <h3>CPD Report Builder</h3>
                  <p>
                    Turn data into impact assessments. Choose your project and
                    let AI handle the heavy lifting
                  </p>
                  <Button
                    shape="round"
                    type="primary"
                    className="secondary-btn"
                  >
                    Start Building
                  </Button>
                </div>
                <div className="card-image">
                  <img src={IMAGES.placeholderCard} alt="placeholderCard" />
                </div>
              </div>
              <div
                className="card-half"
                style={{
                  backgroundImage: `url(${IMAGES.cardTwoBg})`,
                }}
              >
                <div className="card-text">
                  <h3>Ask ERM AI</h3>
                  <p>
                    Ask ERM AI to find anything across knowledge sources or to
                    analyze data
                  </p>
                  <Button
                    shape="round"
                    type="primary"
                    className="secondary-btn"
                  >
                    Ask a question
                  </Button>
                </div>
              </div>
              <div
                className="card-half"
                style={{
                  backgroundImage: `url(${IMAGES.cardTwoBg})`,
                }}
              >
                <div className="card-text">
                  <h3>Access your Knowledge Base</h3>
                  <p>
                    View all the sources synced into the platform for use with
                    AI
                  </p>
                  <Button
                    shape="round"
                    type="primary"
                    className="secondary-btn"
                  >
                    Browse sources
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <HowToUsePlateform />
        <Faq />
      </section>
      <Footer />
    </div>
  );
};

export default Home;
