import { useState } from "react";
import "./Questionnaire.css";
import Modal from "./Modal";
import womanPhoto from "../assets/images/woman.png";
import airPlanePhoto from "../assets/images/airplane.png";

function Questionnaire() {
  const [questions] = useState([
    {
      id: 1,
      question: "What type of activities do you plan to do during your stay ?",
      responses: ["Fun/Relaxation", "Cultural", "Gastronomy", "Nature"],
    },
    {
      id: 2,
      question: "What’s your daily budget ?",
      responses: ["20$ - 50$", "50$ - 100$", "100$ - 300$", "+300$"],
    },
    {
      id: 3,
      question: "Which season do you prefer ?",
      responses: ["Winter", "Autumn", "Spring", "Summer"],
    },
    {
      id: 4,
      question: "You’ll need to rent a vehicle ?",
      responses: ["Yes", "No"],
    },
    {
      id: 5,
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
    <div>
      <h1>To see our suggestions, please answer all the questions below :</h1>
      <div className="main-container">
        <div className="airplane-and-woman">
          <img className="airplane" src={airPlanePhoto} alt="airplane" />
          <img
            className="traveller-woman"
            src={womanPhoto}
            alt="traveller-woman"
          />
        </div>
        <div className="questions-and-button">
          <div className="questionnaire">
            {questions.map((question) => (
              <div key={question.id} className="question">
                <h2>{question.question}</h2>
                {question.responses.map((response) => (
                  <label key={response}>
                    <input
                      type="radio"
                      name={`question-${question.id}`}
                      value={response}
                      onChange={() =>
                        handleResponseChange(question.id, response)
                      }
                      checked={answers[question.id] === response}
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

          <Modal show={showModal} onClose={handleClose}>
            <h2 className="PopupTitle">Would you like to be informed</h2>
            <h3>about our new plans</h3>
            <p className="PopupCall">Please fill in to continue</p>
            <form onSubmit={handleFormSubmit}>
              <input className="Name" type="text" placeholder="Name" required />
              <input
                className="Email"
                type="email"
                placeholder="E-mail"
                required
              />
              <button className="Submit" type="submit">
                Continue
              </button>
            </form>
          </Modal>
        </div>
      </div>
    </div>
  );
}

export default Questionnaire;
