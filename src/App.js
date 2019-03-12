import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Menu from './Menu';
import Home from './Home';
import EventLinks from './EventLinks';
import Event1 from './Event1';
import Header from './Header';
import './styles.css';

const contentHTML = `<div>
  <p>
    Ich hoffe, dass sie sich herauslocken lässt, die Frühlingssonne. Auf
    jeden Fall wird es eine Wanderung durch eine sehr schöne und
    abwechslungsreiche Landschaft werden.
  </p>
  <p>
    <strong>
      Jeder besorgt sich bitte selbst seine Fahrkarte für den Tarifbereich
      Berlin C.
    </strong>
  </p>
  <p>
    Treffpunkt ist um
    <strong>
      &nbsp;10:30 Uhr im Bahnhof Gesundbrunnen auf dem Bahnsteig an Gleis
      9&nbsp;
    </strong>
    in der Nähe des Fahrkartenautomaten. Von dort fahren wir um 10:39 Uhr
    mit Bahn und Bus nach Rüdnitz.
  </p>
  <p>
    Die Wanderstrecke beträgt <strong>ca. 16 km</strong> und endet wieder
    am Ausgangspunkt.
  </p>
  <p>Von Rüdnitz gibt es stündlich Anschlüsse nach Berlin.</p>
  <p>
    Meine Telefonnummer:<strong>&nbsp;01573 8091368</strong>. Bitte kurz
    vor dem Termin an dieser Stelle auf aktuelle Änderungen achten!
  </p>
</div>`;

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
            <Route
              path='/event1'
              render={() => (
                <Event1
                  title={'Frühlingssonne im Biesenthaler Becken'}
                  date={'2019-03-24'}
                  contentHTML={contentHTML}
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
