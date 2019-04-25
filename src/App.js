import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Menu from './Menu';
import Home from './Home';
import Event from './Event';
import Header from './Header';
import Footer from './Footer';
import eventData from './eventData';

import './styles.css';

class App extends React.Component {
  render() {
    {
      return (
        <Router basename='/wandern'>
          <div id='frame'>
            <Header />
            <Route path='/' component={Menu} />
            <Switch>
              {eventData.map((event, idx) => {
                return (
                  <Route key={idx} path={event.path}>
                    <Event data={event} />
                  </Route>
                );
              })}
              <Route path='/' component={Home} />
            </Switch>
            <Footer />
          </div>
        </Router>
      );
    }
  }
}

export default App;
