/* eslint-disable react/prop-types */
// import teams from '../../../pages/Teams/Teams'
import { useState, useEffect } from 'react'
import '../../../common/teams.json'
import './TeamCard.css'

function TeamCard  (props)  {
  const [isActive, setIsActive] = useState(false)
  const [, setTeamDescription] = useState("")
 

  useEffect(() => {
    if (isActive) {
      setTeamDescription(
        "Ovaj tim je osnovan 1886. godine. Najtrofejniji je klub u engleskoj..."
      );
    } else {
      setTeamDescription("");
    }
  }, [isActive]);
  
  return(
<div
      className={isActive ? `team-card` : `team-card`}
      style={{ height: isActive ? "180px" : "120px" }}
    >

      <div className='stats'><h2>Pos:</h2> <h2>Club:</h2> <h2>W</h2> <h2>L</h2> <h2>D</h2> <h2>PTS:</h2> </div>  
      <h2 className='h2' style={{marginLeft: "50px"}}>{props.position}</h2>
      <h2 className="h2">{props.team_name}</h2>
      <p className="p">{props.matches}</p>
      <p className="p">{props.wins}</p>
      <p className="p">{props.losses}</p>
      <p className="p">{props.draws}</p>
      <p className="p">{props.points}</p>
      <p className="p">
        <button onClick={() => setIsActive(!isActive)} className="show">
          {isActive ? "Show less" : "Show More"}
        </button>
      </p>
      {isActive ? (
        <p className="ptext">
           {props?.desc}
        </p>
      ) : null}
    </div>
  )
}

export default TeamCard