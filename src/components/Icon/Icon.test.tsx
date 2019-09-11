import * as React from 'react';
import { shallow } from 'enzyme';
import { create } from 'react-test-renderer';

import Icon, { IIconProps } from './Icon';

describe('Icon', () => {
  let props: IIconProps;
  let Component;

  beforeEach(() => {
    props = { icon: 'times' };
    Component = shallow<Icon>(<Icon {...props} />);
  });

  it('should render', () => {
    expect(create(Component).toJSON()).toMatchSnapshot();
  });
});
