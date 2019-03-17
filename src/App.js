import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//import Menu from './Menu';
//import EventLinks from './EventLinks';
import Event from './Event';
//import Header from './Header';
import eventData from './eventData';

import './styles.css';

class App extends React.Component {
  render() {
    {
      return eventData.map((event, idx) => {
        return <Event key={idx} data={event} />;
      });
    }
    //return <div>HEllo</div>;
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
