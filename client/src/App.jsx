import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  return (
    <div className="container">
      <Navbar />
      <main>
        <div className="main_content">
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export default App;
