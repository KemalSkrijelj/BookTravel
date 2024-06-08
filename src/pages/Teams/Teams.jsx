import teams from "../../common/hotels.json";
import TeamCard from '../../components/Cards/TeamCard/TeamCard'
import './Teams.css'

const  Teams = () => {
return(
  <div className="teams">
    
  {teams.map((team) => (
    <TeamCard
    key
    team_name= {team.team_name}
    points={team.points}
    matches_played={team.matches_played}
    goals_scored={team.goals_scored}
    goals_conceded={team.goals_conceded}
    wins={team.wins}
    draws={team.draws}
    losses={team.losses}
    />
  ))}
</div>
  );
} 
  
export default Teams
