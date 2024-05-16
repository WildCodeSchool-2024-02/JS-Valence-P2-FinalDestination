import { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  const [formResult, setFormResult] = useState();
  return (
    <>
      <Navbar />
      <main className="container">
        <Outlet context={[formResult, setFormResult]} />
      </main>
    </>
  );
}

export default App;
