import React, { Component } from 'react';
import EventForm from './EventForm';
import { connect } from 'react-redux';
import { createEvent } from '../actions/eventActions';
class NewEventPage extends Component {

  createEvent = ({ event }) => {
    return this.props.createEvent({ event }).then(
      () => {}
      //   this.props.addFlashMessage({
      //     type: 'success',
      //     text: 'You logged in successfully. Welcome!'
      //   });
      // this.setState({ redirect: true })},
    );
  }

  render() {
    return (
      <div>
        <EventForm createEvent={this.props.createEvent}/>
      </div>
    );
  }
}

export default connect(null, { createEvent })(NewEventPage);
