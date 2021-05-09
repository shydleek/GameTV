import '../index.css';
import React from 'react';
import * as Api from 'typescript-fetch-api';

const api = new Api.DefaultApi()

class News extends React.Component {

  constructor(props) {
    super(props);
    this.state = { events: [] };

    this.handleReload = this.handleReload.bind(this);
  }


  async handleReload(event) {
    const response = await api.news({ date: '' });
    this.setState({ events: response });
  }


  render() {
    return <div>
      <h2>You're on /news</h2>
      <button className="btn" onClick={this.handleReload}>Reload</button>
      {this.state.events.map(
          (event) =>
          <div>
            <h3>{event.id}</h3><br/>
            <h3>{event.name}</h3><br/>
            <h3>{event.description}</h3><br/>
            <h3>{event.date}</h3>
          </div>
      )}
    </div>
  }
}

export default News;