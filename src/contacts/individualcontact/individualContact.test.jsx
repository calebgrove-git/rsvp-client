import React from 'react';
import ReactDOM from 'react-dom';
import IndividualContact from './individualContact';
import renderer from 'react-test-renderer';
import * as redux from 'react-redux';

describe('IndividualContact component', () => {
  const useSelectorMock = jest.spyOn(redux, 'useSelector');
  const useDispatchMock = jest.spyOn(redux, 'useDispatch');
  beforeEach(() => {
    useSelectorMock.mockClear();
    useDispatchMock.mockClear();
  });
  it('renders without crashing', () => {
    useSelectorMock.mockReturnValue({ menus: { invite: true } });
    ReactDOM.render(
      <IndividualContact contact={{ name: 'test', email: 'test' }} />,
      document.createElement('div')
    );
    ReactDOM.unmountComponentAtNode(document.createElement('div'));
  });
  it('renders the UI as expected', () => {
    useSelectorMock.mockReturnValue({ menus: { invite: true } });
    renderer
      .create(<IndividualContact contact={{ name: 'test', email: 'test' }} />)
      .toJSON();
    expect(renderer).toMatchSnapshot();
  });
});
