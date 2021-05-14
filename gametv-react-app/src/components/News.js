import '../App.css';
import React from 'react';
import * as Api from 'typescript-fetch-api';

const api = new Api.DefaultApi()

class News extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      events: []
    };

    this.handleReload = this.handleReload.bind(this);
    this.handleReload();
  }

  async handleReload(event) {
    const response = await api.news({ date: '' });
    this.setState({ events: response });
  }


  render() {
    return <section className="main">
      <div className="container">
        <div className="main__inner">
          {this.state.events.map(
              (event) =>
              <div className="main__news">
                <h2 className="main__title">
                    <a href="#" className="main__title-link">{event.name}</a>   
                </h2>
                <p className="main__text">
                    <a href="#" className="main__text-link">{event.description}</a> 
                </p>
              </div>
          )}
          </div>
        </div>
    </section>
  }
}

export default News;