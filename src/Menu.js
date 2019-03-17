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
        href: '/event1',
        label: 'MÄR',
        id: 'event1',
        submenu: false
      },
      {
        href: '/event2',
        label: 'APR',
        id: 'event2',
        submenu: false
      },
      {
        href: '/event3',
        label: 'MAI',
        id: 'event3',
        submenu: false
      },
      {
        href: '/event4',
        label: 'JUN',
        id: 'event4',
        submenu: false
      },
      {
        href: '/event5',
        label: 'JUL',
        id: 'event5',
        submenu: false
      },
      {
        href: '/event6',
        label: 'AUG',
        id: 'event6',
        submenu: false
      },
      {
        href: '/event7',
        label: 'SEP',
        id: 'event7',
        submenu: false
      },
      {
        href: '/event8',
        label: 'OKT',
        id: 'event8',
        submenu: false
      }
      //{
      //  href: '/',
      //  label: 'Heem',
      //  id: 'heem',
      //  submenu: true
      //}
    ];
    return (
      <div id='mainMenu'>
        {links.map((link, idx) => {
          const { href, label } = link;
          return (
            <React.Fragment key={`link_${idx}`}>
              {pathname === href ? (
                <div className='activeItem menuDiv'>{label}&nbsp;</div>
              ) : (
                <div className='menuDiv'>
                  <Link
                    className='link'
                    id={href}
                    onClick={e => this._onClick(e, link)}
                    to={href}
                  >
                    {label}
                  </Link>
                  &nbsp;
                </div>
              )}
            </React.Fragment>
          );
        })}
      </div>
    );
  }

  _onClick(e, link) {
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
