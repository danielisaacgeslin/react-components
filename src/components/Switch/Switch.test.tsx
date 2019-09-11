import * as React from 'react';
import { shallow } from 'enzyme';
import { create } from 'react-test-renderer';

import Switch, { ISwitchProps } from './Switch';

describe('Switch Component', () => {
  let Component;
  let props: ISwitchProps;

  beforeEach(() => {
    props = {
      checked: true,
      disabled: false,
      onChange: jest.fn()
    };
  });

  it('should render checked', () => {
    props.checked = true;
    Component = shallow(<Switch {...props} />);
    expect(create(Component).toJSON()).toMatchSnapshot();
  });

  it('should render unchecked', () => {
    props.checked = false;
    Component = shallow(<Switch {...props} />);
    expect(create(Component).toJSON()).toMatchSnapshot();
  });

  it('should render with label checked', () => {
    props.checked = true;
    props.checkedLabel = 'checked';
    props.unCheckedLabel = 'unchecked';
    Component = shallow(<Switch {...props} />);
    expect(create(Component).toJSON()).toMatchSnapshot();
  });

  it('should render with label unchecked', () => {
    props.checked = false;
    props.checkedLabel = 'checked';
    props.unCheckedLabel = 'unchecked';
    Component = shallow(<Switch {...props} />);
    expect(create(Component).toJSON()).toMatchSnapshot();
  });

  it('should render disabled', () => {
    props.disabled = true;
    Component = shallow(<Switch {...props} />);
    expect(create(Component).toJSON()).toMatchSnapshot();
  });

  it('should onChange', () => {
    Component = shallow(<Switch {...props} />);
    Component.find('div')
      .first()
      .simulate('click');
    expect(props.onChange).toBeCalled();
  });

  it('should NOT onChange disabled', () => {
    props.disabled = true;
    Component = shallow(<Switch {...props} />);
    Component.find('div')
      .first()
      .simulate('click');
    expect(props.onChange).not.toBeCalled();
  });
});
