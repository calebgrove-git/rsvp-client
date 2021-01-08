import React from 'react';
import ReactDOM from 'react-dom';
import CreateContact from './createContact';
import renderer from 'react-test-renderer';
import * as redux from 'react-redux';

describe('CreateContact component', () => {
  const useSelectorMock = jest.spyOn(redux, 'useSelector');
  const useDispatchMock = jest.spyOn(redux, 'useDispatch');
  beforeEach(() => {
    useSelectorMock.mockClear();
    useDispatchMock.mockClear();
  });
  it('renders without crashing', () => {
    useSelectorMock.mockReturnValue({ modal: { main: true } });
    ReactDOM.render(<CreateContact />, document.createElement('div'));
    ReactDOM.unmountComponentAtNode(document.createElement('div'));
  });
  it('renders the UI as expected', () => {
    useSelectorMock.mockReturnValue({ modal: { main: true } });
    renderer.create(<CreateContact />).toJSON();
    expect(renderer).toMatchSnapshot();
  });
});
