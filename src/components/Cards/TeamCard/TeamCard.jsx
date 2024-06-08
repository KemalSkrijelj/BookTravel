// import teams from '../../../pages/Teams/Teams'
import '../../../common/teams.json'
import './TeamCard.css'

function TeamCard  (props)  {
  return(
    <div className='teams-card'>
     <h1>{props?.wins}lla</h1>
    </div>
  )
}

export default TeamCard