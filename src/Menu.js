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
        id: 'elinks',
        submenu: true
      },
      {
        href: '/event1',
        label: 'Event 1',
        id:'event1',
        submenu: false
      },
      {
        href: '/',
        label: 'Heem',
        id: 'heem',
        submenu: true
      }
    ];
    return (
      <div id='mainMenu'>
        <div>
          {links.map((link, idx) => {
            const { href, label } = link;
            return (
              <React.Fragment key={`link_${idx}`}>
                {
                  pathname === href
                  ? <span className="activeItem">{label}&nbsp;</span>
                  : <React.Fragment>
                      <Link
                        className="link"
                        id={href}
                        onMouseOver={e => this._onMouseOver(e)}
                        onMouseOut={e => this._onMouseOut(e)}
                        onClick={e => this._onClick(e, link)}
                        to={href}
                      >
                        {label}
                      </Link>
                      &nbsp;
                    </React.Fragment>
                }
              </React.Fragment>
            );
          })}
          <a className="toggle"
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
    e.target.style.textDecoration = 'underline';
    e.target.style.backgroundColor = 'green';
  }

  _onMouseOut(e) {
    e.target.style.textDecoration = 'none';
    e.target.style.backgroundColor = 'lightseagreen';
  }

  _onClick(e, link) {
    console.log(link);
    this.setState({ pathname: link.href });
    this.setState({ subVisible: link.submenu });
  }

  renderSubMenu() {
    return (
      <div id='subMenu'>{this.state.subVisible && <div>subMenu</div>}</div>
    );
  }
}

export default Menu;
