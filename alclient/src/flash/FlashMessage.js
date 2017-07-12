import React, { Component } from 'react';
import classnames from 'classnames';

class FlashMessage extends Component {

  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    console.log("clicked");
    this.props.deleteFlashMessage(this.props.message.id);
  }

  render() {
    const { id, type, text} = this.props.message;
    return (
      <div className={classnames('ui', {
        'positive message': type === 'success',
        'negative message': type === 'errer'
      })}>
        {text}
        <button onClick={this.onClick} className="close"><span>&times;</span></button>
      </div>
    );
  }

}

export default FlashMessage;
