import '../index.css';
import React from 'react';
import * as Api from 'typescript-fetch-api';
//import { withRouter } from "react-router";

const api = new Api.DefaultApi()

class Statistics extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      events: []
    };

    this.handleReload = this.handleReload.bind(this);
    this.handleReload();
  }

  async handleReload(event) {
    const response = await api.matches({ date: '' });
    this.setState({ events: response });
  }


  render() {
   return <div>
      <section className="main_s">
      <div className="container_s">
        <div className="main__inner">
        <div className="main__stats">
        <div className="main__stream">
        </div>
        {this.state.events.map(
            (event) =>
            <div>
              <div className="main__statistics">
              <div className="main__statistics__team1">
              <h3 className="main__schedule__title-link" key={event.id}>{event.team1}:</h3>
              <div className="players">
              <p className="player">{event.players1[0].name} : {event.players1[0].score}</p>
              <p className="player">{event.players1[1].name} : {event.players1[1].score}</p>
              <p className="player">{event.players1[2].name} : {event.players1[2].score}</p>
              <p className="player">{event.players1[3].name} : {event.players1[3].score}</p>
              <p className="player">{event.players1[4].name} : {event.players1[4].score}</p>
              </div>
            </div>
            <div className="main__statistics__team2">
              <h3 className="main__schedule__title-link">{event.team2}:</h3>
              <div className="players">
              <p className="player">{event.players2[0].name} : {event.players2[0].score}</p>
              <p className="player">{event.players2[1].name} : {event.players2[1].score}</p>
              <p className="player">{event.players2[2].name} : {event.players2[2].score}</p>
              <p className="player">{event.players2[3].name} : {event.players2[3].score}</p>
              <p className="player">{event.players2[4].name} : {event.players2[4].score}</p>
              </div>
            </div>
            </div>
            </div>
        )}
      </div>
      </div>
      </div>
      </section>
    </div>
  }
}

export default Statistics;
