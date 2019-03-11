import React from 'react';
import { Link } from 'react-router-dom';

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subVisible: false
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
    e.target.style.backgroundColor = 'lightseagreen';
  }

  renderMainMenu() {
    return (
      <div id='mainMenu'>
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
          &nbsp;
          <a
            href='javascript: void(0)'
            onMouseOver={e => this._onMouseOver(e)}
            onMouseOut={e => this._onMouseOut(e)}
            onClick={() =>
              this.setState({ subVisible: !this.state.subVisible })
            }
          >
            toggleSub
          </a>
        </div>
      </div>
    );
  }

  renderSubMenu() {
    return (
      <div id='subMenu'>{this.state.subVisible && <div>subMenu</div>}</div>
    );
  }
}

export default Menu;
