import '../index.css';
import React from 'react';
import * as Api from 'typescript-fetch-api';

const api = new Api.DefaultApi()

class Places extends React.Component {

  constructor(props) {
    super(props);
    this.state = { events: [] };

    this.handleReload = this.handleReload.bind(this);
  }


  async handleReload(event) {
    const response = await api.places({ date: '' });
    this.setState({ events: response });
  }


  render() {
    return <div>
      <h2>You're on /places</h2>
      <button className="btn" onClick={this.handleReload}>Reload</button>
      {this.state.events.map(
          (event) =>
          <div className='inner'>
            <div className='photo'>
              <p className='text'>Photo of place</p>
            </div>
            <p>{event.description}</p>
            <p><span>{event.location}</span></p>
            <h3>{event.name}</h3>
            <p><i>{event.date}</i></p>
          </div>
      )}
    </div>
  }
}

export default Places;