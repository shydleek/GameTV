import '../index.css';
import React from 'react';
import * as Api from 'typescript-fetch-api';

const api = new Api.DefaultApi()

class Top extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      events: []
    };

    this.handleReload = this.handleReload.bind(this);
    this.handleReload();
  }

  async handleReload(event) {
    const response = await api.top({ date: '' });
    this.setState({ events: response });
  }


  render() {
    return <div>
      <h2>You're on /top</h2>
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