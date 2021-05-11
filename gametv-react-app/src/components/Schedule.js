import '../index.css';
import React from 'react';
import * as Api from 'typescript-fetch-api';
//import { withRouter } from "react-router";

const api = new Api.DefaultApi()

class Schedule extends React.Component {

  constructor(props) {
    super(props);
    this.state = { events: [] };

    this.handleReload = this.handleReload.bind(this);
  }


  async handleReload(event) {
    const response = await api.matches({ date: '' });
    this.setState({ events: response });
  }


  render() {
    return <div>
      <h2>You're on matches(schedule)</h2>
      <button className="btn" onClick={this.handleReload}>Reload</button>
      {this.state.events.map(
          (event) =>
          <div>
            <h3>{event.team1} - {event.team2}</h3>
            <p><span>Score: {event.score}</span></p>
            <p><span>Tornament: {event.tournament}</span></p>
          </div>
      )}
    </div>
  }
}

export default Schedule;