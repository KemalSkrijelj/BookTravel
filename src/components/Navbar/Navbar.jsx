import "./Navbar.css";
import { NavLink, Link } from "react-router-dom";

export function Navbar() {

  return (
    <header >
      <div className="wrapper">
        <div className="logo">
          <NavLink to={""} className={"navlink"}>
            <h1>CheckInnNow</h1>
          </NavLink>
        </div>
        <div className="listing">
          <ul>
            <NavLink
              to={"/hotels-list"}
              className={({ isActive }) =>
                isActive ? "navlink-active" : "navlink"}> <li>Hotels</li></NavLink>
            <NavLink
              to={"/teams"}
              className={({ isActive }) =>
                isActive ? "navlink-active" : "navlink"}> <li>Teams</li></NavLink>
            <NavLink
              to={"/apartmens"}
              className={({ isActive }) =>
                isActive ? "navlink-active" : "navlink"}> <li>Apartmens</li></NavLink>
            <NavLink
              to={"/about-us"}
              className={({ isActive }) =>
                isActive ? "navlink-active" : "navlink"}> <li>About us</li></NavLink>
          </ul>
          <button>Log in</button>
        </div>

          <div className="desc">
            <h1>Search lowest prices on <Link to='/hotels'>hotels</Link>, apartmans and so much more...</h1>
            <h2>Book your stay instantly with CheckInnNow, and enjoy hassle-free reservations.</h2>
          </div>
      </div>
    </header>
  );
}
