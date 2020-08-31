import React from "react";
import "./champion-rotation.css";
import LeagueOfLegendsService from "../../services/league-of-legends.service";

class ChampionRotation extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      champions: []
    }
  }

  componentDidMount() {
    LeagueOfLegendsService.getChampionRotation()
      .then((response) => {
        const championRotation = response

        this.setState({
          champions: championRotation.freeChampionIds
        })
      })
  }

  render() {
    return (
      <div>
        {this.state.champions.map((champion) => {
          return <p>{champion}</p>
        })}
      </div>
    )
  }
}

export default ChampionRotation;