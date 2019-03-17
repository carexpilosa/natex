import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Menu from './Menu';
import EventLinks from './EventLinks';
import Event1 from './Event1';
import Header from './Header';
import eventData from './eventData';
import image from './img/hellbach.jpeg';
import './styles.css';

class App extends React.Component {
  render() {
    return (
      <Router basename='/wandern'>
        <React.Fragment>
          <div id='leftContent'>
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
                    />
                  )}
                />
              ))}
              <Route
                path='/'
                render={() => (
                  <React.Fragment>
                    <h3>Aktuell:</h3>
                    <Event1
                      title={eventData[0].title}
                      date={eventData[0].date}
                      contentHTML={eventData[0].contentHTML}
                    />
                  </React.Fragment>
                )}
              />
            </Switch>
          </div>
          <div id='rightContent'>
            <img id='rightImg' src={image} alt='hellbach' />
            {/*<Switch>
              <Route
                path='/'
                render={() => {
                  return (
                    <div>
                      {eventData.map((event, idx) => {
                        return <span key={`k${idx}`}>bla</span>;
                      })}
                    </div>
                  );
                }}
              />
              </Switch>*/}
          </div>
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
