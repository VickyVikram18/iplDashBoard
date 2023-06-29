import {useState, useEffect} from 'react'
import {TailSpin} from 'react-loader-spinner'
import {useParams} from "react-router-dom"
import LatestMatch from "../LastestMatch"
import MatchCard from '../MatchCard'
import './index.css'

const TeamMatches = () => {
  const [teamBannerUrl,setTeamBannerUrl] = useState('')
  const [latestMatchDetails,setLatestMatchDetails] = useState({})
  const [recentMatches,setRecentMatches] = useState([])
  const [isLoading,setIsLoading] = useState(true)

  const {id} = useParams()

  useEffect(() => {

    const  getTeamMatchDetails = async () => {

      console.log("Function Called")
        const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
        const data = await response.json()
    
        const updateTeamBannerUrl = data.team_banner_url
        const latestMatchDetails = data.latest_match_details
        const recentMatches = data.recent_matches
    
        const updateMatchDetails = {
          umpires: latestMatchDetails.umpires,
          result: latestMatchDetails.result,
          manOfTheMatch: latestMatchDetails.man_of_the_match,
          id: latestMatchDetails.id,
          date: latestMatchDetails.date,
          venue: latestMatchDetails.venue,
          competingTeam: latestMatchDetails.competing_team,
          competingTeamLogo: latestMatchDetails.competing_team_logo,
          firstInnings: latestMatchDetails.first_innings,
          secondInnings: latestMatchDetails.second_innings,
          matchStatus: latestMatchDetails.match_status,
        }
    
        const updateMatches = recentMatches.map(eachMatch => ({
          umpires: eachMatch.umpires,
          result: eachMatch.result,
          manOfTheMatch: eachMatch.man_of_the_match,
          id: eachMatch.id,
          date: eachMatch.date,
          venue: eachMatch.venue,
          competingTeam: eachMatch.competing_team,
          competingTeamLogo: eachMatch.competing_team_logo,
          firstInnings: eachMatch.first_innings,
          secondInnings: eachMatch.second_innings,
          matchStatus: eachMatch.match_status,
        }))
    
        setTeamBannerUrl(updateTeamBannerUrl)
        setLatestMatchDetails(updateMatchDetails)
        setRecentMatches(updateMatches)
        setIsLoading(false)
      }


    getTeamMatchDetails()
  },[id])

    return (
      <div>
        {isLoading ? (
          <div data-testid="loader">
            <TailSpin type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <div className="team-matches-container">
            <img
              src={teamBannerUrl}
              alt="team banner"
              className="team-banner"
            />
            <h1 className="latest-heading">Latest Matches</h1>
            <div>
              <LatestMatch
                latestMatchDetails={latestMatchDetails}
                key={latestMatchDetails.id}
              />
            </div>
            <ul className="recent-matches-container">
              {recentMatches.map(eachMatch => (
                <MatchCard eachMatch={eachMatch} key={eachMatch.id} />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
}

export default TeamMatches
