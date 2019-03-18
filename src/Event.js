import React from 'react';

class Event extends React.Component {
  render() {
    const { title, date, contentHTML, image } = this.props.data;
    let imgSrc;
    if ('_self' in React.createElement('div')) {
      //true only for development mode of webpack
      imgSrc = require(`./img/${image}`);
    } else {
      imgSrc = `./img/${image}`;
    }

    return (
      <div id='container'>
        <div id='leftContent'>
          <h3>{title}</h3>
          <h4>{date}</h4>
          <div dangerouslySetInnerHTML={{ __html: contentHTML }} />
        </div>
        <div id='rightContent'>
          <img id='rightImg' src={imgSrc} alt='hellbach' />
        </div>
      </div>
    );
  }
}

export default Event;
