// Modules
import React, { Component } from 'react';
// Styles
import './App.css';
import './nprogress.css';
//Custom components
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
// Mock Data
import { getEvents, extractLocations } from './api';

class App extends Component {

  state = {
    events: [],
    locations: [],
    numberOfEvents: 32,
    tokenCheck: false,
  }

  componentDidMount() {
    this.mounted = true;
    getEvents().then((events) => {
      if (this.mounted) {
        this.setState({
          events: events.slice(0, this.state.numberOfEvents),
          locations: extractLocations(events)
        });
      }
    });
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  updateEvents = (location, eventCount) => {
    console.log('update events token valid: ', this.state.tokenCheck)
    const { currentLocation, numberOfEvents } = this.state;
    if (location) {
      getEvents().then((response) => {
        const locationEvents =
          location === "all"
            ? response.events
            : response.events.filter((event) => event.location === location);
        const events = locationEvents.slice(0, numberOfEvents);
        return this.setState({
          events: events,
          currentLocation: location,
          locations: response.locations,
        });
      });
    } else {
      getEvents().then((response) => {
        const locationEvents =
          currentLocation === "all"
            ? response.events
            : response.events.filter(
              (event) => event.location === currentLocation
            );
        const events = locationEvents.slice(0, eventCount);
        return this.setState({
          events: events,
          numberOfEvents: eventCount,
          locations: response.locations,
        });
      });
    }
  };

  render() {
    return (
      <div className="App">
        <h1 className="app-name">Meet App</h1>
        <CitySearch locations={this.state.locations} updateEvents={this.updateEvents} numberOfEvents={this.numberOfEvents} />
        <NumberOfEvents updateEvents={this.updateEvents} numberOfEvents={this.state.numberOfEvents} />
        <EventList events={this.state.events} /> 
      </div>
    );
  }
}

export default App;