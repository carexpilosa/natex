import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Menu from './Menu';
//import EventLinks from './EventLinks';
import Event from './Event';
//import Header from './Header';
import eventData from './eventData';

import './styles.css';

const Home = () => {
  return <h5>HOME</h5>;
};

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
  /*render() {
    return (
      <Router basename='/wandern'>
        <Switch>
          {eventData.map((event, idx) => (
            <Route
              key={idx}
              path={event.path}
              render={() => (
                <Event
                  title={event.title}
                  date={event.date}
                  contentHTML={event.contentHTML}
                />
              )}
            />
          ))}
        </Switch>
      </Router>
    );
  }*/
}

export default App;
