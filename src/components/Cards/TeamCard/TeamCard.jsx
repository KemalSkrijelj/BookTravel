/* eslint-disable react/prop-types */
// import teams from '../../../pages/Teams/Teams'
import { useState } from "react";
import "../../../common/teams.json";
import "./TeamCard.css";
import { FaBucket } from "react-icons/fa6";

function TeamCard(props) {
  const [isActive, setIsActive] = useState(false);

  return (
    <div
      className={isActive ? `team-card` : `team-card`}
      style={{ height: isActive ? "180px" : "120px" }}
    >
      <h2 className="h2" style={{ marginLeft: "50px" }}>
        {props.position} Pos
      </h2>
      <h2 className="h2">{props.team_name}</h2>
      <p className="p">{props.matches}</p>
      <p className="p">{props.wins} W</p>
      <p className="p">{props.losses} L</p>
      <p className="p">{props.draws} D</p>
      <p className="p">{props.points}pts</p>
      <button className="btn"  onClick={props.deleteItem}>
        {" "}
        <FaBucket className="bucket" />
      </button>
      <button onClick={() => setIsActive(!isActive)} className="btn">
        {isActive ? "Show less" : "Show More"}
      </button>
      {isActive ? <p className="ptext">{props?.desc}</p> : null}
    </div>
  );
}

export default TeamCard;
