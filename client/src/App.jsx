import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./App.css";
import Questionnaire from "./components/Questionnaire";

function App() {
  return (
    <>
      <Navbar />
      <main className="container">
        <Outlet />

        <div className="Questionnaire">
          <Questionnaire />
        </div>
      </main>
    </>
  );
}

export default App;
