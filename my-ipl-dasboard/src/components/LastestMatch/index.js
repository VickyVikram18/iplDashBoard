// Write your code here
import './index.css'

const LatestMatch = props => {
  const {latestMatchDetails} = props
  const {
    umpires,
    result,
    manOfTheMatch,
    date,
    venue,
    competingTeam,
    competingTeamLogo,
    firstInnings,
    secondInnings,
  } = latestMatchDetails

  return (
    <div className="latest-match-container">
      <div>
        <p className="competing-name">{competingTeam}</p>
        <p className="date">{date}</p>
        <p className="venue">{venue}</p>
        <p className="result">{result}</p>
      </div>
      <div className="team-logo-container">
        <img
          src={competingTeamLogo}
          alt={`latest match ${competingTeam}`}
          className="team-logo"
        />
      </div>
      <div>
        <h1 className="innings-heading">First Innings</h1>
        <p className="innings">{firstInnings}</p>
        <h1 className="innings-heading">Second Innings</h1>
        <p className="innings">{secondInnings}</p>
        <h1 className="innings-heading">Man of The Match</h1>
        <p className="innings">{manOfTheMatch}</p>
        <h1 className="innings-heading">Umpires</h1>
        <p className="innings">{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
