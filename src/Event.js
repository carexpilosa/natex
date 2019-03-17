import React from 'react';

class Event extends React.Component {
  render() {
    const { title, date, contentHTML, image } = this.props.data;
    const imgSrc = require(`./img/${image}`);
    return (
      <div>
        <h3>{title}</h3>
        <h4>{date}</h4>
        <div dangerouslySetInnerHTML={{ __html: contentHTML }} />
        <div id='rightContent'>
          <img id='rightImg' src={imgSrc} alt='hellbach' />
        </div>
      </div>
    );
  }
}

export default Event;
