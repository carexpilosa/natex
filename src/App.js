import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Menu from './Menu';
import Home from './Home';
import EventLinks from './EventLinks';
import Event1 from './Event1';
import Header from './Header';
import './styles.css';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Menu />
          <Switch>
            <Route path='/elinks' component={EventLinks} />
            <Route
              path='/event1'
              render={() => (
                <Event1
                  title={'Frühlingssonne im Biesenthaler Becken'}
                  date={'2019-03-24'}
                  isAuthed={true}
                />
              )}
            />
            <Route component={Home} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
