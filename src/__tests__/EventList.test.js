import React from 'react';
import { shallow } from 'enzyme';
// Custom Components to be tested
import EventList from '../EventList';
import Event from '../Event';
// Mock Data
import {mockData} from '../mock-data';

describe('<EventList /> component', () => {

  test('render correct number of events', () => {
    const EventListWrapper = shallow(<EventList events={mockData} />);
    expect(EventListWrapper.find(Event)).toHaveLength(mockData.length);
  });
    
});