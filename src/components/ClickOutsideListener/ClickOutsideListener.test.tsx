import * as React from 'react';
import { create } from 'react-test-renderer';
import { mount } from 'enzyme';

import ClickOutsideListener from './ClickOutsideListener';

describe('ClickOutsideListener Component', () => {
  global.console.error = () => null;
  let wrapper;
  let props;
  let onClickOutside;
  let addEventListener;
  let removeEventListener;
  let triggerEventOutside;
  let triggerEventInside;
  let registry;

  beforeEach(() => {
    registry = {};
    onClickOutside = jest.fn();
    removeEventListener = jest.fn();

    addEventListener = (eventName, cb) => (registry[eventName] = event => cb(event));

    props = { onClickOutside, document: { addEventListener, removeEventListener } };

    wrapper = mount(
      <div key="tst">
        <span className="outside">outside</span>
        <ClickOutsideListener {...props}>
          <span className="inside">inside</span>
        </ClickOutsideListener>
      </div>
    );

    triggerEventOutside = eventName =>
      registry[eventName]({
        target: wrapper
          .find('.outside')
          .first()
          .getDOMNode()
      });
    triggerEventInside = eventName =>
      registry[eventName]({
        target: wrapper
          .find('.inside')
          .first()
          .getDOMNode()
      });
  });

  it('should render children', () => {
    expect(create(wrapper).toJSON()).toMatchSnapshot();
  });

  it('should call onClickOutside when click happens OUTSIDE', () => {
    triggerEventOutside('mousedown');
    expect(onClickOutside).toBeCalled();
  });

  it('should NOT call onClickOutside when click happens INSIDE', () => {
    triggerEventInside('mousedown');
    expect(onClickOutside).not.toBeCalled();
  });

  it('should call removeEventListener', () => {
    wrapper.unmount();
    expect(removeEventListener).toBeCalled();
  });
});
