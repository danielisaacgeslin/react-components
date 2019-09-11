import React from 'react';
import { create } from 'react-test-renderer';
import { shallow } from 'enzyme';

import ModalComponent, { IModalState } from './ModalComponent';

describe('ModalComponent Component', () => {
  let state: IModalState;
  let Component;

  beforeEach(() => {
    state = {
      isOpen: true,
      title: 'test title',
      body: <p>test body</p>,
      confirmText: 'confirm btn',
      confirmColor: 'red',
      confirmBackground: 'white',
      cancelText: 'cancel btn',
      cancelColor: 'black',
      cancelBackground: 'white',
      onConfirm: jest.fn(),
      onCancel: jest.fn()
    };
    Component = shallow(<ModalComponent />);
    Component.setState(state);
  });

  it('should render open', () => {
    expect(create(Component).toJSON()).toMatchSnapshot();
  });

  it('should render closed', () => {
    Component.setState({ isOpen: false });
    expect(create(Component).toJSON()).toMatchSnapshot();
  });

  it('should render disabled', () => {
    Component.setState({ disabled: true });
    expect(create(Component).toJSON()).toMatchSnapshot();
  });

  it('should render inverted', () => {
    Component.setState({ invertBtns: true });
    expect(create(Component).toJSON()).toMatchSnapshot();
  });

  it('should confirm', () => {
    Component.find('[data-testid="modal-confirm"]').simulate('click');
    expect(state.onConfirm).toBeCalled();
  });

  it('should cancel', () => {
    Component.find('[data-testid="modal-cancel"]').simulate('click');
    expect(state.onCancel).toBeCalled();
  });
});
