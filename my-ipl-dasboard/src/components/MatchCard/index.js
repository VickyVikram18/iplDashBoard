// Write your code here
import './index.css'

const MatchCard = props => {
  const {eachMatch} = props
  const {result, competingTeam, competingTeamLogo, matchStatus} = eachMatch
  const className = matchStatus === 'Won' ? 'matchWin' : 'matchLoose'

  return (
    <li className="recent-match">
      <img
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
        className="competing-team-logo"
      />
      <p className="competing-team-heading">{competingTeam}</p>
      <p className="result">{result}</p>
      <p className={className}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
