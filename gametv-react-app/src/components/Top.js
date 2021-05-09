import '../index.css';
import React from 'react';
import * as Api from 'typescript-fetch-api';

const api = new Api.DefaultApi()

class Top extends React.Component {

  constructor(props) {
    super(props);
    this.state = { events: [] };

    this.handleReload = this.handleReload.bind(this);
  }


  async handleReload(event) {
    const response = await api.top({ date: '' });
    this.setState({ events: response });
  }


  render() {
    return <div>
      <h2>You're on /top</h2>
      <button className="btn" onClick={this.handleReload}>Reload</button>
      {this.state.events.map(
          (event) =>
          <div>
            <p>{event.id}</p>
            <p>{event.nickname}</p>
            <p>{event.teamname}</p>
          </div>
      )}
    </div>
  }
}

export default Top;