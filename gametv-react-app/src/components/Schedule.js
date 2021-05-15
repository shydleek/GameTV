import '../index.css';
import React from 'react';
import * as Api from 'typescript-fetch-api';
//import { withRouter } from "react-router";

const api = new Api.DefaultApi()

class Schedule extends React.Component {

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
      <section className="main">
      <div className="container_s">
        <div className="main__inner">
        {this.state.events.map(
            (event) =>
            <div className="main__schedule">
                  <h3 className="main__schedule__title">
                      <a href="#" className="main__schedule__title-link">{event.team1} — {event.team2}</a>   
                  </h3>
                  <span className="main__schedule__text">
                  Score: {event.score}
                  </span>
                  <br />
                  <span className="main__schedule__text">
                  Tornament: {event.tournament}
                  </span>
                  <br />
                </div>
        )}
        <h2 className="main__stream__title">Live stream</h2>
        <div className="main__stream-video"></div>
        
        </div>
      </div>
      </section>
    </div>
  }
}

export default Schedule;
