import React from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import Home from './Home';
import EventLinks from './EventLinks';
import Event1 from './Event1';
import Header from './Header';

export default class Skeleton extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <div>
            <Link
              onMouseOver={e => this._onMouseOver(e)}
              onMouseOut={e => this._onMouseOut(e)}
              to='/elinks'
            >
              eventLinks
            </Link>
            &nbsp;
            <Link
              onMouseOver={e => this._onMouseOver(e)}
              onMouseOut={e => this._onMouseOut(e)}
              to='/event1'
            >
              event 1
            </Link>
            &nbsp;
            <Link
              onMouseOver={e => this._onMouseOver(e)}
              onMouseOut={e => this._onMouseOut(e)}
              to='/'
            >
              heem
            </Link>
          </div>
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
  _onMouseOver(e) {
    e.target.style.backgroundColor = 'red';
  }
  _onMouseOut(e) {
    e.target.style.backgroundColor = '';
  }
}
