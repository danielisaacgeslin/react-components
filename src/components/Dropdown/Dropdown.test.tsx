import React from 'react';
import { shallow } from 'enzyme';
import { create } from 'react-test-renderer';

import Dropdown, { IDropdownProps } from './Dropdown';

describe('Dropdown Component', () => {
  let Component;
  let props: IDropdownProps;

  beforeEach(() => {
    props = {
      isOpen: true
    };
    Component = shallow(<Dropdown {...props} />);
  });

  it('should render closed', () => {
    props.isOpen = false;
    Component = shallow(<Dropdown {...props} />);
    expect(create(Component).toJSON()).toMatchSnapshot();
  });

  it('should render open', () => {
    props.isOpen = true;
    Component = shallow(<Dropdown {...props} />);
    expect(create(Component).toJSON()).toMatchSnapshot();
  });

  it('should render small', () => {
    props.small = true;
    Component = shallow(<Dropdown {...props} />);
    expect(create(Component).toJSON()).toMatchSnapshot();
  });

  it('should stop propagation', () => {
    const event = { stopPropagation: jest.fn() };
    Component.find('div')
      .first()
      .simulate('click', event);
    expect(event.stopPropagation).toBeCalled();
  });
});
