import './App.css';
import './reset.css';
import React from 'react';
import Schedule from './components/Schedule';
import Statistics from './components/Statistics';
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
  <header className="header">
    <div className="container">
      <div className="header__inner">
        <nav className="header__nav">
          <ul className="header__list">
            <li className="header__item">
              <Link to="/news" className="header__item-link">News</Link>
            </li>
            <li className="header__item">
              <Link to="/matches" className="header__item-link">Matches</Link>
            </li>
            <li className="header__item">
              <Link to="/results" className="header__item-link">Results</Link>
            </li>
            <li className="header__item">
              <Link to="/top" className="header__item-link">Top</Link>
            </li>
            <li className="header__item">
              <Link to="/signin" className="header__item-link">Sing In</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <div className="App">
         
        <section> 
          <Switch>

            <Route path="/news">
              <News />
            </Route>

            <Route path="/matches">
              <Schedule />
              <Statistics />
            </Route>

            <Route path="/results">
              <LastMatches />
              <Forum />
              <Statistics />
            </Route>
            
            <Route path="/top">
              <Top />
            </Route>

            <Route path="/singin">
              <SignIn />
            </Route>

            <Route path="/">
              <News />
            </Route>

            <Route path="/*">
              <NoMatch />
            </Route>
            
          </Switch>
          

        </section>
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

function SignIn() {

  return (
    <div>
      <h3>
        Empty. Sorry :(
      </h3>
    </div>
  );
}
 
export default App;