/* eslint-disable react/jsx-key */
import teams from "../../common/teams.json";
import TeamCard from "../../components/Cards/TeamCard/TeamCard";
import "./Teams.css";

const Teams = () => {
  return (
    <div className="teams">
      {teams.map((team) => (
        <TeamCard
          position={team.position}
          team_name={team.team_name}
          points={team.points}
          matches_played={team.matches_played}
          goals_scored={team.goals_scored}
          goals_conceded={team.goals_conceded}
          wins={team.wins}
          draws={team.draws}
          losses={team.losses}
          desc={team.desc}
        />
      ))}
    </div>
  );
};

export default Teams;
