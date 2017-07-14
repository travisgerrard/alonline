import React, { Component } from 'react';
import TextFieldGroup from '../common/TextFieldGroup';
import classnames from 'classnames';
// import validateInput from '../validations/login';

class EventForm extends Component {

  state = {
    title: '',
    errors: {},
    isLoading: false
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.createEvent(this.state);
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
    const { title, errors, isLoading } = this.state;
    return (
      <form className={classnames('ui', 'form', { loading: this.state.loading })} onSubmit={this.handleSubmit}>
        <h1>Create New Game</h1>

        {!!this.state.errors.global && <div className="ui negative message"><p>{this.state.errors.global}</p></div>}

        <TextFieldGroup
          field="title"
          name="title"
          label="Event Title"
          value={title}
          error={errors.title}
          onChange={this.handleChange}
        />

        <div className="field">
          <button className="ui primary button">Create</button>
        </div>

      </form>
    );
  }

}

export default EventForm;
