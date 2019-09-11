import React from 'react';

import { storiesOf } from '@storybook/react';
import { text, number } from '@storybook/addon-knobs';

import DropdownSelect from '../src/components/DropdownSelect';

const list = [
  { value: 'item', label: 'item' },
  { value: 'another item', label: 'another item' },
  { value: 'last item', label: 'last item' },
]

storiesOf('DropdownSelect', module)
  .add('Dropdown', () => (
    <div>
      <label>with chips</label>
      <DropdownSelect label="label" optionList={list} />
      <label>without chips</label>
      <DropdownSelect label="label" showChips={false} optionList={list} />
    </div>
  ));