import { useState } from "react";
import "./QuestionnairePage.css";
import Modal from "../components/Modal";

function Questionnaire() {
  const [questions] = useState([
    {
      id: "Type",
      question: "What type of activities do you plan to do during your stay ?",
      responses: ["Fun/Relaxation", "Cultural", "Gastronomy", "Nature"],
    },
    {
      id: "Budget",
      question: "What’s your daily budget ?",
      responses: ["20$ - 50$", "50$ - 100$", "100$ - 200$", "+200$"],
    },
    {
      id: "Season",
      question: "Which season do you prefer ?",
      responses: ["Winter", "Autumn", "Spring", "Summer"],
    },
    {
      id: "Vehicle",
      question: "You’ll need to rent a vehicle ?",
      responses: ["Yes", "No"],
    },
    {
      id: "Group",
      question: "How many people are you ?",
      responses: ["Alone", "Couple", "More than 2"],
    },
  ]);

  const [answers, setAnswers] = useState({});
  const [showModal, setShowModal] = useState(false);

  const handleResponseChange = (questionId, response) => {
    setAnswers({ ...answers, [questionId]: response });
  };

  const handleSubmit = () => {
    setShowModal(true);
  };
  const handleClose = () => {
    setShowModal(false);
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleClose();
  };

  return (
    <div className="PageQuestionnaire">
      <div className="questions-and-button">
        <div className="questionnaire">
          <h1>To see our suggestions, please answer all the questions :</h1>
          {questions.map((question) => (
            <div key={question.id} className="question">
              <h2>{question.question}</h2>
              {question.responses.map((response) => (
                <label key={response}>
                  <input
                    type="radio"
                    name={`question-${question.id}`}
                    value={response}
                    onChange={() => handleResponseChange(question.id, response)}
                    checked={answers[question.id] === response}
                    style={{ marginRight: "8px" }}
                  />
                  {response}
                </label>
              ))}
            </div>
          ))}
          <button className="Action" type="submit" onClick={handleSubmit}>
            Continue
          </button>
        </div>

        {showModal && (
          <Modal show={showModal} onClose={handleClose}>
            <div className="PopUp">
              <h2 className="PopupTitle">Would you like to be informed?</h2>
              <h3>
                about our new plans <br /> please fill in to continue
              </h3>
              <form onSubmit={handleFormSubmit}>
                <input
                  className="Name"
                  type="text"
                  placeholder="Name"
                  required
                />
                <input
                  className="Email"
                  type="email"
                  placeholder="E-mail"
                  required
                />
                <button className="SubmitInfo" type="submit">
                  Continue
                </button>
              </form>
            </div>
          </Modal>
        )}
      </div>
    </div>
  );
}

export default Questionnaire;
