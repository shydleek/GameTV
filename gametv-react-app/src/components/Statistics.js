import '../index.css';
import React from 'react';
import * as Api from 'typescript-fetch-api';
//import { withRouter } from "react-router";

const api = new Api.DefaultApi()

class Statistics extends React.Component {

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
      <h2>You're on matches(statistics)</h2>
      <button className="btn" onClick={this.handleReload}>Reload</button>
      {this.state.events.map(
          (event) =>
          <div>
            <h3>{event.team1}</h3>
            <p><span>{event.players1[0].name} : {event.players1[0].score}</span></p>
            <p><span>{event.players1[1].name} : {event.players1[1].score}</span></p>
            <p><span>{event.players1[2].name} : {event.players1[2].score}</span></p>
            <p><span>{event.players1[3].name} : {event.players1[3].score}</span></p>
            <p><span>{event.players1[4].name} : {event.players1[4].score}</span></p>
          </div>
      )}
    </div>
  }
}

export default Statistics;