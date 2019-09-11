import React from 'react';
import { mount } from 'enzyme';
import { create } from 'react-test-renderer';

import Collapsible, { ICollapsibleProps } from './Collapsible';

describe('Collapsible', () => {
  let props: ICollapsibleProps;
  let wrapper;

  beforeEach(() => {
    global.console.error = () => {
      /** */
    };
    props = { title: 'Collapsible title ', defaultOpen: true };
    wrapper = mount<Collapsible>(
      <Collapsible {...props}>
        <div>Content</div>
      </Collapsible>
    );
  });

  it('should render', done => {
    setTimeout(() => {
      expect(create(wrapper).toJSON()).toMatchSnapshot();
      done();
    });
  });

  it('should render with content hidden', () => {
    props.defaultOpen = false;
    wrapper = mount<Collapsible>(
      <Collapsible {...props}>
        <div>Content</div>
      </Collapsible>
    );
    expect(create(wrapper).toJSON()).toMatchSnapshot();
  });

  it('should hide the content', () => {
    wrapper = mount<Collapsible>(
      <Collapsible {...props}>
        <div>Content</div>
      </Collapsible>
    );
    wrapper.find('[data-attribute="button-toggle"]').simulate('click');

    expect(create(wrapper).toJSON()).toMatchSnapshot();
  });

  it('should render a title as a component', () => {
    props.title = <h1>TITLE</h1>;
    wrapper = mount<Collapsible>(
      <Collapsible {...props}>
        <div>Content</div>
      </Collapsible>
    );

    expect(create(wrapper).toJSON()).toMatchSnapshot();
  });

  it('should render custom icon', () => {
    props.iconOpen = <i>icon open</i>;
    props.iconCollapsed = <i>icon collapsed</i>;
    wrapper = mount<Collapsible>(
      <Collapsible {...props}>
        <div>Content</div>
      </Collapsible>
    );

    expect(create(wrapper).toJSON()).toMatchSnapshot();
  });
});
