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
    currentLocation: 'all'
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

  updateEvents = (location, countEvent = this.state.numberOfEvents) => {
  
    const { currentLocation, numberOfEvents } = this.state;
    if (location) {
      getEvents().then((events) => {
        const locations = location === "all"
            ? events
            : events.filter((event) => event.location === location);
        let slicedEvents = locations.slice(0, countEvent);
        this.setState({
          events: slicedEvents,
          currentLocation: location
        });
      });
    } 
  };

  updateNumberOfEvents = (numberOfEvents) => {
    this.setState({
      numberOfEvents: numberOfEvents
    })
    this.updateEvents(this.state.currentLocation, numberOfEvents);
  }

  render() {
    return (
      <div className="App">
        <h1 className="app-name">Meet App</h1>
        <CitySearch locations={this.state.locations} updateEvents={this.updateEvents} numberOfEvents={this.state.numberOfEvents} />
        <NumberOfEvents updateNumberOfEvents={this.updateNumberOfEvents} numberOfEvents={this.state.numberOfEvents} />
        <EventList events={this.state.events} /> 
      </div>
    );
  }
}

export default App;