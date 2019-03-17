import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Menu from './Menu';
//import EventLinks from './EventLinks';
import Event from './Event';
//import Header from './Header';
import eventData from './eventData';

import './styles.css';

class App extends React.Component {
  render() {
    {
      return (
        <Router basename='/wandern'>
          <React.Fragment>
            <Route path='/' component={Menu} />
            <Switch>
              {eventData.map((event, idx) => {
                return (
                  <Route key={idx} path={event.path}>
                    <Event data={event} />
                  </Route>
                );
              })}
            </Switch>
          </React.Fragment>
        </Router>
      );
    }
  }
}

export default App;
