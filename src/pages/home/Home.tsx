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
        <HowToUsePlateform />
        <Faq />
      </section>
      <Footer />
    </div>
  );
};

export default Home;
