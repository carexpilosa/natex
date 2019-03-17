import React from 'react';
import image from './img/hellbach.jpeg';

class Event extends React.Component {
  render() {
    const { title, date, contentHTML, img } = this.props.data;
    return (
      <div>
        <h3>{title}</h3>
        <h4>{date}</h4>
        <div dangerouslySetInnerHTML={{ __html: contentHTML }} />
        <div id='rightContent'>
          <img id='rightImg' src={image} alt='hellbach' />
        </div>
      </div>
    );
  }
}

export default Event;
