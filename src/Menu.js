import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import EventLinks from './EventLinks';
import Event1 from './Event1';

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subVisible: true
    };
  }
  render() {
    return (
      <div>
        <h3>Menu</h3>
        <div id='mainMenu'>
          mainMenu
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
          <button
            onClick={() =>
              this.setState({ subVisible: !this.state.subVisible })
            }
          >
            toggleSub
          </button>
        </div>
        {this.state.subVisible && <div id='subMenu'>subMenu</div>}
      </div>
    );
  }

  _onMouseOver(e) {
    e.target.style.backgroundColor = 'red';
  }

  _onMouseOut(e) {
    e.target.style.backgroundColor = '';
  }
}

export default Menu;
