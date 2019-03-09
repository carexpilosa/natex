import React from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import Menu from './Menu';
import Home from './Home';
import EventLinks from './EventLinks';
import Event1 from './Event1';
import Header from './Header';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Menu />

          <Header />
          <Switch>
            <Route path='/elinks' component={EventLinks} />
            <Route
              path='/event1'
              render={props => {
                return <Event1 title={'TITLE OF EVENT 1'} isAuthed={true} />;
              }}
            />
            <Route component={Home} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
