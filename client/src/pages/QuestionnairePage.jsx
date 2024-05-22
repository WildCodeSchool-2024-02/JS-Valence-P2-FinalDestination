import { useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import "./QuestionnairePage.css";
import Modal from "../components/Modal";
import destinations from "../db";

function QuestionnairePage() {
  const [questions] = useState([
    {
      id: "Type",
      question: "What type of activities do you plan to do during your stay?",
      responses: ["Fun/Relaxation", "Cultural", "Gastronomy", "Nature"],
    },
    {
      id: "Budget",
      question: "What’s your daily budget?",
      responses: ["20$ - 50$", "50$ - 100$", "100$ - 300$", "+300$"],
    },
    {
      id: "Season",
      question: "Which season do you prefer?",
      responses: ["Winter", "Autumn", "Spring", "Summer"],
    },
    {
      id: "Vehicle",
      question: "You’ll need to rent a vehicle?",
      responses: ["Yes", "No"],
    },
    {
      id: "Group",
      question: "How many people are you?",
      responses: ["Alone", "Couple", "More than 2"],
    },
  ]);

  const [setFormData] = useOutletContext();
  const [answers, setAnswers] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleResponseChange = (event, questionId) => {
    setAnswers((oldAnswers) => ({
      ...oldAnswers,
      [questionId]: event.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const selectedAnswersCount = Object.keys(answers).length;
    if (selectedAnswersCount < 2) {
      setErrorMessage("Please select at least two criteria.");
      return;
    }
    setErrorMessage("");
    setShowModal(true);

    setFormData(answers);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // eslint-disable-next-line no-use-before-define
    const filteredDestinations = filterDestinations(answers);
    navigate("/suggestions", { state: { suggestions: filteredDestinations } });
    handleClose();
  };

  // eslint-disable-next-line no-shadow
  const filterDestinations = (answers) =>
    destinations.filter((destination) => {
      const budgetRange = answers.Budget?.split(" ")[0].replace("$", "");
      const budgetLower = parseInt(budgetRange?.split("-")[0], 10);
      const budgetUpper = parseInt(
        budgetRange?.split("-")[1] || budgetLower,
        10
      );

      const matchesBudget =
        budgetRange &&
        destination.budget[0] <= budgetUpper &&
        destination.budget[1] >= budgetLower;
      const matchesActivities = answers.Type
        ? destination.activities.includes(answers.Type.toLowerCase())
        : true;
      const matchesSeason = answers.Season
        ? destination.activities.includes(answers.Season.toLowerCase())
        : true;
      const matchesVehicle = answers.Vehicle
        ? destination.activities.includes(answers.Vehicle.toLowerCase())
        : true;
      const matchesGroup = answers.Group
        ? destination.activities.includes(answers.Group.toLowerCase())
        : true;

      return (
        (matchesBudget && matchesActivities) ||
        (matchesBudget && matchesSeason) ||
        (matchesBudget && matchesVehicle) ||
        (matchesBudget && matchesGroup) ||
        (matchesActivities && matchesSeason) ||
        (matchesActivities && matchesVehicle) ||
        (matchesActivities && matchesGroup) ||
        (matchesSeason && matchesVehicle) ||
        (matchesSeason && matchesGroup) ||
        (matchesVehicle && matchesGroup)
      );
    });

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
                    onChange={(event) =>
                      handleResponseChange(event, question.id)
                    }
                    checked={answers[question.id] === response}
                    style={{ marginRight: "8px" }}
                    required
                  />
                  {response}
                </label>
              ))}
            </div>
          ))}
          {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
          <button className="Action" type="submit" onClick={handleSubmit}>
            Continue
          </button>
        </div>

        <Modal show={showModal} onClose={handleClose}>
          <div className="PopUp">
            <h2 className="PopupTitle">Would you like to be informed?</h2>
            <h3>
              about our new plans <br /> please fill in to continue
            </h3>
            <form onSubmit={handleFormSubmit}>
              <input className="Name" type="text" placeholder="Name" required />
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
      </div>
    </div>
  );
}

export default QuestionnairePage;
