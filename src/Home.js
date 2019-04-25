import React from 'react';

export default class Home extends React.Component {
  render() {
    return (
      <div id='container'>
        <div id='leftContent'>
          <h3>Herzlich Willkommen</h3>
          Klicken Sie auf einen Monatsnamen, wenn Sie etwas über die
          entsprechende Wanderung erfahren möchten.
        </div>
        <div id='rightContent'>
          {
            //<img id='rightImg' src={imgSrc} alt='hellbach' />
          }
        </div>
      </div>
    );
  }
  _render() {
    return (
      <div id='home'>
        <h3>Herzlich Willkommen</h3>
        Klicken Sie auf einen Monatsnamen, wenn Sie etwas über die entsprechende
        Wanderung erfahren möchten.
      </div>
    );
  }
}
