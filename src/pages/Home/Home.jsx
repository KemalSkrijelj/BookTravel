import "./Home.css";
import { NavLink, Link } from "react-router-dom";
// import background from '../Navbar/mykonos_1.jpg'

export function Home() {
  return (
    <header className="header">
      <div className="wrapper">
        <div className="logo">
          <NavLink to={""} className={"navlink"}>
            <h1>CheckInnNow</h1>
          </NavLink>
        </div>

        <div className="desc">
          <h1>
            Search lowest prices on <Link to="/hotels-list">hotels</Link>, apartmans
            and so much more...
          </h1>
          <h2>
            Book your stay instantly with CheckInnNow, and enjoy hassle-free
            reservations.
          </h2>
        </div>
      </div>
    </header>
  );
}
