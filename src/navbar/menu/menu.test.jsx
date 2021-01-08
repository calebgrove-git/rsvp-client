import React from 'react';
import ReactDOM from 'react-dom';
import Menu from './menu';
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
    ReactDOM.render(<Menu />, document.createElement('div'));
    ReactDOM.unmountComponentAtNode(document.createElement('div'));
  });
  it('renders the UI as expected', () => {
    renderer.create(<Menu />).toJSON();
    expect(renderer).toMatchSnapshot();
  });
});
