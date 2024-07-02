import "./Auth.css";
import Login from "../Login/Login";
import SignUp from "../SignUp/SignUp";
import { useState } from "react";

export default function Auth() {
  const [view, setView] = useState("basic");
  return (
    <div className="auth">
      <nav className="nav-auth">
        <h3
          onClick={() => setView("basic")}
          style={{ color: view === "basic" ? "#fff" : "" }}
        >
          Login
        </h3>
        <h3
          onClick={() => setView("advanced")}
          style={{ color: view === "advanced" ? "#fff" : "" }}
        >
          SignUp
        </h3>
      </nav>
      {view === "basic" ? <Login /> : <SignUp />}
    </div>
  );
}