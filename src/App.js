import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Menu from './Menu';
import Home from './Home';
import EventLinks from './EventLinks';
import Event1 from './Event1';
import Header from './Header';
import eventData from './eventData';
import './styles.css';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Switch>
            <Menu />
          </Switch>
          <Switch>
            <Route path='/elinks' component={EventLinks} />
            {eventData.map((event, idx) => (
              <Route
                key={idx}
                path={event.path}
                render={() => (
                  <Event1
                    title={event.title}
                    date={event.date}
                    contentHTML={event.contentHTML}
                    isAuthed={true}
                  />
                )}
              />
            ))}
            <Route path='/' component={Home} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
