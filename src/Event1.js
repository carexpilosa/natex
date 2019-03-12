import React from 'react';

class Event1 extends React.Component {
  render() {
    return (
      <div>
        <h3>{this.props.title}</h3>
        <h4>{this.props.date}</h4>
        <div dangerouslySetInnerHTML={{ __html: this.props.contentHTML }} />
      </div>
    );
  }
}

export default Event1;
