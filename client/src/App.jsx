import { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  const [formData, setFormData] = useState();

  return (
    <div className="container">
      <Navbar />
      <main>
        <div className="main_content">
          <Outlet context={[formData, setFormData]} />
        </div>
      </main>
    </div>
  );
}

export default App;
