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
        {this.renderMainMenu()}
        {this.renderSubMenu()}
      </div>
    );
  }

  _onMouseOver(e) {
    e.target.style.backgroundColor = 'red';
  }

  _onMouseOut(e) {
    e.target.style.backgroundColor = '';
  }

  renderMainMenu() {
    return (
      <div id='mainMenu'>
        <h4>
          mainMenu&nbsp;
          <button
            onClick={() =>
              this.setState({ subVisible: !this.state.subVisible })
            }
          >
            toggleSub
          </button>
        </h4>
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
      </div>
    );
  }

  renderSubMenu() {
    return <div id='subMenu'>{this.state.subVisible && <h5>subMenu</h5>}</div>;
  }
}

export default Menu;
