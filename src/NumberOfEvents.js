import React, { Component } from 'react';
import { ErrorAlert } from './Alert';

class NumberOfEvents extends Component {

  state = {
    numberOfEvents: 32,
    errorText: '',
  }

  handleInputChanged = (event) => {
    const value = event.target.value;
console.log(value)
    this.setState({ numberOfEvents: value });

    if (value < 1) {
      return this.setState({
        errorText: 'Please choose a number between 1 and 32',
        numberOfEvents: ''
      });
    } else if (value > 32) {
      return this.setState({
        errorText: 'Please choose a number between 1 and 32',
        numberOfEvents: ''
      });
    } else {
      this.setState({
        numberOfEvents: value,
        errorText: '',
      });
      this.props.updateNumberOfEvents(value);
    }
  };

  render() {
    return (
      <div className="numberOfEvents">
        <label htmlFor='numberOfEvent'>Number of Events</label>
        <input
          type="number"
          className="event-number-input"
          placeholder='Enter Number of Events'
          value={this.state.numberOfEvents}
          onChange={this.handleInputChanged}
        />
        <ErrorAlert text={this.state.errorText} />
      </div>
    );
  }
}

export default NumberOfEvents;