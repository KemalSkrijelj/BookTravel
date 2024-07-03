import "./Navbar.css";
import { NavLink, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

export function Navbar() {
  // eslint-disable-next-line no-unused-vars
  const { loggedInUser, setLoggedInUser } = useContext(AppContext);
  // eslint-disable-next-line no-unused-vars
  const navigate = useNavigate();

  function sendToLoginPage  () {
    window.location.href = '/yourList'
  }
  return (
    <header className="header-nav">
      <div className="wrapper">
        <div className="logo">
          <NavLink to={""} className={"navlink"}>
            <h1>CheckInnNow</h1>
          </NavLink>
        </div>
        {loggedInUser && (
        <div className="listing">
          
          <ul>
            <NavLink
              to={"/hotels-list"}
              className={({ isActive }) =>
                isActive ? "navlink-active" : "navlink"}>{" "}<li>Hotels</li></NavLink>

            <NavLink
              to={"/teams"}
              className={({ isActive }) =>
                isActive ? "navlink-active" : "navlink"} >{" "}<li>Teams</li></NavLink>

            <NavLink
              to={"/yourList"}
              className={({ isActive }) =>
                isActive ? "navlink-active" : "navlink"}>{" "}<li>Your List</li></NavLink>
            
            <NavLink to={'/quotes'}
            className={({ isActive }) =>
                isActive ? "navlink-active" : "navlink"}>{" "}<li>Quotes</li>
            </NavLink>
            
            <NavLink
              to={"/about-us"}
              className={({ isActive }) =>
                isActive ? "navlink-active" : "navlink"}>{" "}<li>About us</li></NavLink>

          </ul>
          <button
              onClick={() => {
                setLoggedInUser(null);
                localStorage.removeItem("loggedInUser");
                navigate("auth");
              }}
            >
              Logout
            </button>
        </div>
        )}
      </div>
    </header>
  );
}
