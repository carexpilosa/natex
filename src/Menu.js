import React from 'react';
import { Link } from 'react-router-dom';

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subVisible: false,
      pathname: props.location.pathname
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

  static getDerivedStateFromProps(nextProps) {
    return { pathname: nextProps.location.pathname };
  }

  renderMainMenu() {
    const { pathname } = this.state;
    const links = [
      {
        link: '/elinks',
        label: 'Event Links'
      },
      {
        link: '/event1',
        label: 'Event 1'
      },
      {
        link: '/',
        label: 'Heem'
      },
    ];
    return (
      <div id='mainMenu'>
        <div>
          {
            links.map(link => {
              return (
                <React.Fragment>
                  <Link
                    className={pathname === link.link ? 'link' : 'nolink'}
                    onMouseOver={e =>
                      pathname !== link.link ? this._onMouseOver(e) : undefined
                    }
                    onMouseOut={e =>
                      pathname !== link.link ? this._onMouseOut(e) : undefined
                    }
                    to={link.link}
                  >
                    {link.label}
                  </Link>
                  &nbsp;
                </React.Fragment>
              )
            })
          }
          {/*
          <Link
            className={pathname === '/elinks' ? 'link' : 'nolink'}
            onMouseOver={e =>
              pathname !== '/elinks' ? this._onMouseOver(e) : undefined
            }
            onMouseOut={e =>
              pathname !== '/elinks' ? this._onMouseOut(e) : undefined
            }
            to='/elinks'
          >
            eventLinks
          </Link>
          &nbsp;
          <Link
            className={pathname === '/event1' ? 'link' : 'nolink'}
            onMouseOver={e => this._onMouseOver(e)}
            onMouseOut={e => this._onMouseOut(e)}
            to='/event1'
          >
            event 1
          </Link>
          &nbsp;
          <Link
            className={pathname === '/' ? 'link' : 'nolink'}
            onMouseOver={e => this._onMouseOver(e)}
            onMouseOut={e => this._onMouseOut(e)}
            to='/'
          >
            heem
          </Link>
          &nbsp;
          */}
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

  _onMouseOver(e) {
    e.target.style.backgroundColor = 'red';
    return true;
  }

  _onMouseOut(e) {
    e.target.style.backgroundColor = 'lightseagreen';
    return true;
  }

  renderSubMenu() {
    return (
      <div id='subMenu'>{this.state.subVisible && <div>subMenu</div>}</div>
    );
  }
}

export default Menu;
