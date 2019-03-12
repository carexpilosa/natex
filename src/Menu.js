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
    console.log('RRRRRENDER', this.state);
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
        href: '/elinks',
        label: 'Event Links',
        id:'elinks'
      },
      {
        href: '/event1',
        label: 'Event 1',
        id:'event1'
      },
      {
        href: '/',
        label: 'Heem',
        id:'heem'
      }
    ];
    return (
      <div id='mainMenu'>
        <div>
          {links.map((link, idx) => {
            const { href, label } = link;
            return (
              <React.Fragment key={`link_${idx}`}>
                <Link
                  id={href}
                  className={pathname === href ? 'nolink' : 'link'}
                  onMouseOver={e =>
                    pathname !== href ? this._onMouseOver(e) : undefined
                  }
                  onMouseOut={e =>
                    pathname !== href ? this._onMouseOut(e) : undefined
                  }
                  onClick={() => this.setState({ pathname, href })}
                  to={href}
                >
                  {label}
                </Link>
                &nbsp;
              </React.Fragment>
            );
          })}
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
  }

  _onMouseOut(e) {
    e.target.style.backgroundColor = 'lightseagreen';
  }

  renderSubMenu() {
    return (
      <div id='subMenu'>{this.state.subVisible && <div>subMenu</div>}</div>
    );
  }
}

export default Menu;
