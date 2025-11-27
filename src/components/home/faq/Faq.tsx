import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Collapse } from "antd";
import "./Faq.scss";

const Faq = () => {
  return (
    <section className="home-faq-section">
      <div className="container">
        <div className="faq-wrapper">
          {/* LEFT SIDE */}
          <div className="faq-left">
            <h2>Frequently Asked Questions</h2>
            <p>Find answers to common questions about our platform</p>
            <Button shape="round" type="primary" className="secondary-btn">
              REQUEST SUPPORT
            </Button>
          </div>

          {/* RIGHT SIDE */}
          <div className="faq-right">
            <Collapse
              accordion
              expandIconPosition="end"
              className="faq-collapse"
              expandIcon={({ isActive }) =>
                isActive ? (
                  <MinusOutlined style={{ fontSize: 18 }} />
                ) : (
                  <PlusOutlined style={{ fontSize: 18 }} />
                )
              }
            >
              <Collapse.Panel
                header="How does the knowledge base work?"
                key="1"
              >
                A knowledge base pulls documentation from sources like
                SharePoint...
              </Collapse.Panel>

              <Collapse.Panel header="What file types are supported?" key="2">
                Supported file types include PDF, DOCX, PPTX...
              </Collapse.Panel>

              <Collapse.Panel header="How secure is my data?" key="3">
                Your data is encrypted in transit and at rest...
              </Collapse.Panel>

              <Collapse.Panel
                header="Can the knowledge base pull documentation from SharePoint?"
                key="4"
              >
                Yes, the system can sync SharePoint folders...
              </Collapse.Panel>

              <Collapse.Panel
                header="How frequently does the system update information?"
                key="5"
              >
                The system checks on scheduled intervals...
              </Collapse.Panel>
            </Collapse>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
