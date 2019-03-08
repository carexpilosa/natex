import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import EventLinks from './EventLinks';
import Event1 from './Event1';

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <h3>DAHEEME ...</h3>
        <Router>
          <div>
            <p>
              <Link
                to='/event1'
                query={{ bla: 'hurzq' }}
                params={{ bla: 'hurzp' }}
              >
                Event1
              </Link>
            </p>
            <p>
              <Link to='/eventlinks'>EventLinks</Link>
            </p>
            <Route
              path='/event1'
              render={props => {
                return <Event1 title={'TITLE OF EVENT 1'} isAuthed={true} />;
              }}
            />
            <Route path='/eventlinks' component={EventLinks} />
          </div>
        </Router>
      </div>
    );
  }
}
