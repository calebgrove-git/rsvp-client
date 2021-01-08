import React from 'react';
import ReactDOM from 'react-dom';
import Contacts from './contacts';
import renderer from 'react-test-renderer';
import * as redux from 'react-redux';

describe('Contacts component', () => {
  const useSelectorMock = jest.spyOn(redux, 'useSelector');
  const useDispatchMock = jest.spyOn(redux, 'useDispatch');
  beforeEach(() => {
    useSelectorMock.mockClear();
    useDispatchMock.mockClear();
  });
  it('renders without crashing', () => {
    useSelectorMock.mockReturnValue({ contacts: [1, 2, 3] });
    ReactDOM.render(<Contacts />, document.createElement('div'));
    ReactDOM.unmountComponentAtNode(document.createElement('div'));
  });
});
