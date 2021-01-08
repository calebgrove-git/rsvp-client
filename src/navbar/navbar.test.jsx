import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './navbar';
import renderer from 'react-test-renderer';
import * as redux from 'react-redux';

describe('NavBar component', () => {
  const useSelectorMock = jest.spyOn(redux, 'useSelector');
  const useDispatchMock = jest.spyOn(redux, 'useDispatch');
  beforeEach(() => {
    useSelectorMock.mockClear();
    useDispatchMock.mockClear();
  });
  it('renders without crashing', () => {
    useSelectorMock.mockReturnValue({ modal: { main: true } });
    ReactDOM.render(<NavBar />, document.createElement('div'));
    ReactDOM.unmountComponentAtNode(document.createElement('div'));
  });
  it('renders the UI as expected', () => {
    useSelectorMock.mockReturnValue({ modal: { main: true } });
    renderer.create(<NavBar />).toJSON();
    expect(renderer).toMatchSnapshot();
  });
});
