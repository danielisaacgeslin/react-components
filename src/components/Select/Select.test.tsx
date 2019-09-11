import React from 'react';
import { mount } from 'enzyme';
import { create } from 'react-test-renderer';

import Select, { ISelectProps } from './Select';

describe('Select Component', () => {
  let Component;
  let props: ISelectProps;
  let optionList;

  beforeEach(() => {
    global.console.error = () => {
      /** */
    };
    optionList = [
      { value: 1, title: 'one', description: 'this is the number number one' },
      { value: 2, title: 'two', description: 'this is the number number two' }
    ];
    props = {
      value: null,
      optionList: optionList,
      keyExtractor: option => option.value,
      renderOption: option => (
        <div>
          <div>{option.title}</div>
          <small>{option.description}</small>
        </div>
      ),
      renderSelected: option => <div>{option ? option.title : 'please select an option'}</div>,
      onChange: jest.fn()
    };
    Component = mount(<Select {...props} />);
  });

  it('should render closed', () => {
    expect(create(Component).toJSON()).toMatchSnapshot();
  });

  it('should render open', () => {
    Component.find('[data-testid="select"]').simulate('click');
    expect(create(Component).toJSON()).toMatchSnapshot();
  });

  it('should with an option selected', () => {
    props.value = optionList[0];
    Component = mount(<Select {...props} />);
    Component.find('[data-testid="select"]').simulate('click');
    expect(create(Component).toJSON()).toMatchSnapshot();
  });

  it('should select and close', () => {
    Component.find('[data-testid="select"]').simulate('click');
    Component.find('[data-testid="select-option"]')
      .first()
      .simulate('click');

    expect(props.onChange).toBeCalledWith(optionList[0]);
    expect(create(Component).toJSON()).toMatchSnapshot();
  });
});
