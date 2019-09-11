import React from 'react';
import { storiesOf } from '@storybook/react';

import { Collapsible } from '../src/components';
import { boolean, text } from '@storybook/addon-knobs';

storiesOf('Collapsible', module)
  .add('default', () => (
    <Collapsible title={text('Title', 'Collapsible title')} defaultOpen={boolean('Default opened?', true)}>
      <div
        style={{
          background: 'red',
          height: Math.random() * 1000,
          display: 'flex',
          justifyContent: 'center',
          alignContent: 'center',
          alignItems: 'center',
          color: 'white'
        }}
      >
        This is the content of the collapsible component
      </div>
    </Collapsible>
  ));
