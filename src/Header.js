import React from 'react';
import { Link } from 'react-router-dom';

export default class Home extends React.Component {
  render() {
    return (
      <div id='header'>
        <Link to="/">
          <h2>Naturexkursionen 2019</h2>
        </Link>
      </div>
    );
  }
}
