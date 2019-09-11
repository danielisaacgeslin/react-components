import React from 'react';

import { storiesOf } from '@storybook/react';

import Checkbox from '../src/components/Checkbox';

storiesOf('Checkbox', module)
  .add(
    'checked',
    () => <Checkbox checked={true} />
  )
  .add(
    'NOT checked',
    () => <Checkbox checked={false} />
  )
  .add(
    'disabled',
    () => <Checkbox checked={true} disabled={true} />
  )
  .add(
    'radio checked',
    () => <Checkbox checked={true} radio={true} />
  )
  .add(
    'radio NOT checked',
    () => <Checkbox checked={false} radio={true} />
  );
