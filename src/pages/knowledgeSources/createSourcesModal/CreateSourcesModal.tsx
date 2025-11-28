import { Button, Input, Modal, Select } from "antd";
import { IMAGES } from "../../../shared";
import "./CreateSourcesModal.scss";

interface IFeedbackModal {
  isOpen: boolean;
  handleCancel: () => void;
  handleSubmit: () => void;
}
const CreateSourcesModal = ({
  isOpen,
  handleCancel,
  handleSubmit,
}: IFeedbackModal) => {
  const feedbackTopics = [
    { label: "Irrelevant Answer", value: "irrelevant" },
    { label: "Incomplete or Missing Information", value: "incomplete" },
    { label: "Incorrect or Misleading Response", value: "incorrect" },
    { label: "Misunderstood My Question", value: "misunderstood" },
    { label: "Didn't Follow Context", value: "no_context" },
    { label: "Too Generic Response", value: "generic" },
    { label: "Inappropriate or Biased Output", value: "inappropriate" },
    { label: "Refused Incorrectly", value: "refused" },
    { label: "Too Long / Too Short Reply", value: "length_issue" },
    { label: "Hard to Read or Understand", value: "unclear" },
    { label: "Code Not Working", value: "code_error" },
    { label: "Not Matching My Tech Stack", value: "wrong_stack" },
    { label: "UI/UX Feedback", value: "ui_ux" },
    { label: "Something Else", value: "other" },
  ];
  return (
    <Modal
      className="feedback-modal-container"
      title="Create New Knowledge Source"
      open={isOpen}
      onCancel={handleCancel}
      footer={[
        <Button className="secondary-btn" shape="round" onClick={handleCancel}>
          Cancel
        </Button>,
        <Button
          className="primary-btn"
          type="primary"
          shape="round"
          onClick={handleSubmit}
          icon={<img src={IMAGES.arrowRightIcon} alt="right arrow" />}
          iconPosition="end"
        >
          CREATE SOURCE
        </Button>,
      ]}
    >
      <div className="feedback-modal-body">
        <div className="form-item">
          <span className="title">*Source Name</span>
          <Input
            placeholder="Enter source name"
            className="feedback-input-box"
          />
        </div>
        <div className="form-item">
          <span className="title">*Select Permission Group</span>
          <Select
            placeholder="Select"
            classNames={{
              popup: {
                root: "feedback-select-dropdown",
              },
            }}
            options={feedbackTopics}
          />
        </div>
        <div className="form-item">
          <span className="title">*description</span>
          <Input.TextArea
            className="user-feedback-box"
            placeholder="Describe what this source contains"
            rows={5}
            maxLength={250}
          />
        </div>
      </div>
    </Modal>
  );
};

export default CreateSourcesModal;
