import React from 'react';
import { Link } from 'react-router-dom';
import eventData from './eventData';

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
    return (
      <div id='mainMenu'>
        {eventData.map((link, idx) => {
          const { path, label } = link;
          return (
            <React.Fragment key={`link_${idx}`}>
              {pathname === path ? (
                <div className='activeItem menuDiv'>{label}&nbsp;</div>
              ) : (
                <div className='menuDiv'>
                  <Link
                    className='link'
                    id={path}
                    onClick={e => this._onClick(e, link)}
                    to={path}
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
    this.setState({ pathname: link.path });
    this.setState({ subVisible: link.submenu });
  }

  renderSubMenu() {
    return (
      <div id='subMenu'>{this.state.subVisible && <div>subMenu</div>}</div>
    );
  }
}

export default Menu;
