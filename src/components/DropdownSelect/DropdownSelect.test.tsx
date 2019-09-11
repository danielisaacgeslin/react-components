import * as React from 'react';
import { shallow } from 'enzyme';
import { create } from 'react-test-renderer';

import DropdownSelect, { IDropdownSelectProps } from './DropdownSelect';

describe('CaseDetail Component', () => {
  let props: IDropdownSelectProps;

  beforeEach(() => {
    global.console.error = () => {
      /** */
    };
    props = {
      label: 'dropdown',
      optionList: [{ label: 'one', value: '1' }, { label: 'two', value: '2' }],
      initialValue: [],
      onOpen: jest.fn(),
      onClose: jest.fn()
    };
  });

  it('should render closed', () => {
    const Component = shallow<DropdownSelect>(<DropdownSelect {...props} />);
    expect(create(Component.getElement()).toJSON()).toMatchSnapshot();
  });

  it('should render with initial value', () => {
    props.initialValue = [props.optionList[0].value];
    const Component = shallow<DropdownSelect>(<DropdownSelect {...props} />);
    Component.find('button')
      .first()
      .simulate('click');
    expect(create(Component.getElement()).toJSON()).toMatchSnapshot();
  });

  it('should render without showing chips', () => {
    props.initialValue = [props.optionList[0].value];
    props.showChips = false;
    const Component = shallow<DropdownSelect>(<DropdownSelect {...props} />);
    expect(create(Component.getElement()).toJSON()).toMatchSnapshot();
  });

  it('should clear', () => {
    const Component = shallow<DropdownSelect>(<DropdownSelect {...props} />);
    Component.find('button')
      .first()
      .simulate('click');
    Component.find('[data-testid="dropdown-option"]')
      .at(1)
      .simulate('click');
    Component.find('button')
      .last()
      .simulate('click');
    Component.instance().toggleOpen(false)();
    expect(props.onClose).lastCalledWith([]);
  });

  it('should toggle option', () => {
    const Component = shallow<DropdownSelect>(<DropdownSelect {...props} />);
    Component.find('button')
      .first()
      .simulate('click');
    Component.find('[data-testid="dropdown-option"]')
      .at(1)
      .simulate('click');
    Component.find('[data-testid="dropdown-option"]')
      .at(1)
      .simulate('click');
    Component.instance().toggleOpen(false)();
    expect(props.onClose).lastCalledWith([]);
  });

  it('should trigger onOpen if it was closed', () => {
    const Component = shallow<DropdownSelect>(<DropdownSelect {...props} />);
    Component.find('button')
      .first()
      .simulate('click');
    Component.find('button')
      .first()
      .simulate('click');
    expect(props.onOpen).toBeCalledTimes(1);
    expect(props.onClose).toBeCalledTimes(1);
  });

  it('should trigger onClose', () => {
    const Component = shallow<DropdownSelect>(<DropdownSelect {...props} />);
    Component.find('button')
      .first()
      .simulate('click');
    Component.find('[data-testid="dropdown-option"]')
      .at(1)
      .simulate('click');
    Component.instance().toggleOpen(false)();
    expect(props.onClose).toBeCalledWith([props.optionList[1].value]);
  });

  it('should trigger onClose pressing on a chip', () => {
    const Component = shallow<DropdownSelect>(<DropdownSelect {...props} />);
    Component.find('button')
      .first()
      .simulate('click');
    Component.find('[data-testid="dropdown-option"]')
      .at(1)
      .simulate('click');
    Component.instance().toggleOpen(false)();
    Component.find('[data-testid="chip"]')
      .first()
      .simulate('click');
    expect(props.onClose).toBeCalledWith([]);
    expect(props.onClose).toBeCalledTimes(3);
  });

  it('should trigger NOT onClose pressing on a chip if dropdown is open', () => {
    const Component = shallow<DropdownSelect>(<DropdownSelect {...props} />);
    Component.find('button')
      .first()
      .simulate('click');
    Component.find('[data-testid="dropdown-option"]')
      .at(1)
      .simulate('click');
    Component.instance().toggleOpen(false)();
    Component.find('button')
      .first()
      .simulate('click');
    Component.find('[data-testid="chip"]')
      .first()
      .simulate('click');
    expect(props.onClose).toBeCalledTimes(2);
  });
});
