import * as React from 'react';
import { shallow } from 'enzyme';
import { create } from 'react-test-renderer';

import Checkbox, { ICheckboxProps } from './Checkbox';

describe('Checkbox Component', () => {
  let Component;
  let props: ICheckboxProps;

  beforeEach(() => {
    props = {
      checked: true,
      radio: false
    };
  });

  it('should render checked', () => {
    props.checked = true;
    Component = shallow(<Checkbox {...props} />);
    expect(create(Component).toJSON()).toMatchSnapshot();
  });

  it('should render unchecked', () => {
    props.checked = false;
    Component = shallow(<Checkbox {...props} />);
    expect(create(Component).toJSON()).toMatchSnapshot();
  });

  it('should render radio checked', () => {
    props.radio = true;
    props.checked = true;
    Component = shallow(<Checkbox {...props} />);
    expect(create(Component).toJSON()).toMatchSnapshot();
  });

  it('should render radio unchecked', () => {
    props.radio = true;
    props.checked = false;
    Component = shallow(<Checkbox {...props} />);
    expect(create(Component).toJSON()).toMatchSnapshot();
  });
});
