import React, { Component } from 'react';

//Custom Components
import Event from './Event';

export default class EventList extends Component {
    render() {

        const { events } = this.props;
        return (
            <>
                <ul className="eventList" >
                    {events.map(event => 
                        <li key={event.id}>
                            <Event event={event} />
                        </li>
                    )}
                </ul>
            </>
        )
    }
}
