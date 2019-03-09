import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import EventLinks from './EventLinks';
import Event1 from './Event1';

export default class Home extends React.Component {
  render() {
    return (
      <div id='header'>
        <h2>Naturexkursionen 2019</h2>
      </div>
    );
  }
}
