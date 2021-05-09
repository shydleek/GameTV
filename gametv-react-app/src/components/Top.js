import '../index.css';
import React from 'react';
import * as Api from 'typescript-fetch-api';

const api = new Api.DefaultApi()

class WeeklyForecasts extends React.Component {

  constructor(props) {
    super(props);
    this.state = { events: [] };

    this.handleReload = this.handleReload.bind(this);
  }


  async handleReload(event) {
    const response = await api.weeklyforecasts({ date: '' });
    this.setState({ events: response });
  }


  render() {
    return <div>
      <h2>You're on /weeklyforecasts</h2>
      <button className="btn" onClick={this.handleReload}>Reload</button>
      {this.state.events.map(
          (event) =>
          <div className='box'>
            <h3>Temperature for {event.date}</h3>
            <h4>{event.temperature}&deg;</h4>
            <p>{event.description}</p>
            <p><span>{event.location}</span></p>
          </div>
      )}
    </div>
  }
}

export default WeeklyForecasts;