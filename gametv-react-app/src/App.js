import './App.css';
import React from 'react';
//import Matches from './components/Matches.js';
import News from './components/News.js';
import LastMatches from './components/LastMatches.js';
import Forum from './components/Forum.js';
import Top from './components/Top.js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,  
  useLocation
} from "react-router-dom";

function App() {
  return (

<Router>
    <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/results">Results</Link>
            </li>
            <li>
              <Link to="/news">News</Link>
            </li>
            <li>
              <Link to="/top">Top</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <div className="App">
         
        <section> 
          <Switch>

            <Route path="/about">
              <About />
            </Route>

            <Route path="/news">
              <News />
            </Route>
            
            <Route path="/top">
              <Top />
            </Route>

            <Route path="/results">
              <LastMatches />
              <Forum />
              <Statistics />
            </Route>
            
            <Route path="/">
              <h1>Home</h1>
              Welcome to our service. Please explore <Link to="/places">places to visit</Link> and <Link to="/weeklyforecasts">weather forecast</Link> for the following week<br/>
              Also you can visit <Link to="/places">map of weather forecast</Link> <br/>
              Or you can learn information <Link to="/about">about us</Link>!
            </Route>

            <Route path="*">
              <NoMatch />
            </Route>
            
          </Switch>
          

        </section>
      </div>
    </div>
    </Router>
  );
}
function NoMatch() {
  let location = useLocation();

  return (
    <div>
      <h3>
        No match for <code>{location.pathname}</code>
      </h3>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>
        About us
      </h2>
      <p>Here is the description of the service and necessary terms.</p>
    </div>
  );
}
 
export default App;