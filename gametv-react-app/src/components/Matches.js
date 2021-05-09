import '../index.css';
import React from 'react';
import * as Api from 'typescript-fetch-api';

const api = new Api.DefaultApi()

class MapWeatherForecasts extends React.Component {

  constructor(props) {
    super(props);
    this.state = { events: [] };

    this.handleReload = this.handleReload.bind(this);
  }


  async handleReload(event) {
    const response = await api.mapweatherforecasts({ date: '' });
    this.setState({ events: response });
  }


  render() {
    return <div>
      <h2>You're on /mapweatherforecasts</h2>
      <button className="btn" onClick={this.handleReload}>Reload</button>
      {this.state.events.map(
          (event) =>
          <div>
            <h3>{event.temperature}&deg;</h3>
            <p><span>{event.location}</span></p>
          </div>
      )}
    </div>
  }
}

export default MapWeatherForecasts;