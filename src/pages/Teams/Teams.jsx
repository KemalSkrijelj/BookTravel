/* eslint-disable react/jsx-key */
import { useEffect, useState } from "react";
import teams from "../../common/teams.json";
import TeamCard from "../../components/Cards/TeamCard/TeamCard";
import "./Teams.css";

const Teams = () => {
  const [team, setTeam] = useState(teams);

  const handleDeleteToggle = (id) => {
    const filteredTeams = team.filter((team) => team.id !== id);
    setTeam(filteredTeams);
  };

  useEffect(() => {
    const newTeams = teams.map((team) => {
      const TeamID = Math.random(0, 1);
      return {
        ...team,
        id: TeamID,
      };
    });
    setTeam(newTeams);
  }, []);

  return (
    <div className="teams">
      {team.map((team, index) => (
        <TeamCard
          key={index}
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
          deleteItem={() => handleDeleteToggle(team.id)}
        />
      ))}
    </div>
  );
};

export default Teams;
