import '../index.css';
import React from 'react';
import * as Api from 'typescript-fetch-api';

const api = new Api.DefaultApi()

class LastMatches extends React.Component {

  constructor(props) {
    super(props);
    this.state = { events: [] };

    this.handleReload = this.handleReload.bind(this);
  }


  async handleReload(event) {
    const response = await api.results({ date: '' });
    this.setState({ events: response });
  }


  render() {
    return <div>
      <h2>You're on /results</h2>
      <button className="btn" onClick={this.handleReload}>Reload</button>
      {this.state.events.map(
          (event) =>
          <div>
          <h2>{event.team1}-{event.team2}</h2><br/>
        </div>
      )}
    </div>
  }
}

export default LastMatches;