// Write your code here
import {Component} from 'react'
import {TailSpin} from 'react-loader-spinner'
// import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import TeamCard from '../TeamCard'
import './index.css'

class Home extends Component {
  state = {
    teamsList: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getTeamsList()
  }

  getTeamsList = async () => {
    const response1 = await fetch('https://apis.ccbp.in/ipl')
    const data1 = await response1.json()
    const {teams} = data1

    const updateDate = teams.map(eachTeam => ({
      name: eachTeam.name,
      id: eachTeam.id,
      teamImageUrl: eachTeam.team_image_url,
    }))

    this.setState({
      teamsList: updateDate,
      isLoading: false,
    })
  }

  render() {
    const {teamsList, isLoading} = this.state

    return (
      <div className="bg-container">
        <div className="main-container">
          <div className="app-container">
            <div className="heading-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
                alt="ipl logo"
                className="ipl-logo"
              />
              <h1 className="main-heading">IPL Dashboard</h1>
            </div>
            {isLoading ? (
              <div data-testid="loader">
                <TailSpin type="Oval" color="#ffffff" height={50} width={50} />
              </div>
            ) : (
              <ul className="teams-card-container">
                {teamsList.map(eachTeam => (
                  <TeamCard eachTeam={eachTeam} key={eachTeam.id} />
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default Home
