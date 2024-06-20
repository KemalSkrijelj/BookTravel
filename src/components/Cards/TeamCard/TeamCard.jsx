/* eslint-disable react/prop-types */
// import teams from '../../../pages/Teams/Teams'
import { useState } from "react";
import "../../../common/teams.json";
import "./TeamCard.css";
import { FaBucket } from "react-icons/fa6";
import { useEffect } from "react";

function TeamCard({
  id,
  position,
  team_name,
  points,
  matches,
  wins,
  draws,
  losses,
  deleteItem,
  extended,
  setExtended}) {

    const [closed, setClosed] = useState(true);
    const [teamDescription, setTeamDescription] = useState("");
  
    //Hooks
    useEffect(() => {
      if (!closed) {
        setTeamDescription(
          "Ovaj tim je osnovan 1886. godine. Najtrofejniji je klub u engleskoj..."
        );
      } else {
        setTeamDescription("");
      }
    }, [closed]);
  
    useEffect(() => {
      if (extended !== null && extended !== id) {
        setClosed(true);
      }
    }, [extended, id]);
  
    useEffect(() => {
      if (!closed) {
        setExtended(id);
      } else {
        setExtended(null);
      }
    }, [closed, id]);

    return (
      <>
    <div
      className={!closed ? `team-card` : `team-card`}
      style={{ height: !closed ? "180px" : "120px" }}
    >
      <h2 className="h2" style={{ marginLeft: "50px" }}>
        {position} Pos
      </h2>
      <h2 className="h2">{team_name}</h2>
      <p className="p">{matches}</p>
      <p className="p">{wins} W</p>
      <p className="p">{losses} L</p>
      <p className="p">{draws} D</p>
      <p className="p">{points}pts</p>
      <button className="btn"  onClick={deleteItem}>
        {" "}
        <FaBucket className="bucket" />
      </button>
      <button onClick={() => setClosed(!closed)} className="btn">
        {!closed ? "Show less" : "Show More"}
      </button>
      {!closed && <p className="ptext">{teamDescription}</p> }
    </div>
    </>
  );
}

export default TeamCard;
