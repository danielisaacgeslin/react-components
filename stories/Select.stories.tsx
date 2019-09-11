import React from 'react';

import { storiesOf } from '@storybook/react';

import Select from '../src/components/Select';

type IOption = { value: number; title: string; description: string; };

const optionList: IOption[] = [
  { value: 1, title: 'one', description: 'this is the number number one' },
  { value: 2, title: 'two', description: 'this is the number number two' },
  { value: 3, title: 'three', description: 'this is the number number three' },
  { value: 4, title: 'four', description: 'this is the number number four' },
  { value: 5, title: 'five', description: 'this is the number number five' },
  { value: 6, title: 'six', description: 'this is the number number six' },
  { value: 7, title: 'seven', description: 'this is the number number seven' },
  { value: 8, title: 'eight', description: 'this is the number number eight' },
  { value: 9, title: 'nine', description: 'this is the number number nine' },
  { value: 10, title: 'ten', description: 'this is the number number ten' },
  { value: 11, title: 'eleven', description: 'this is the number number eleven' },
];

class SelectStory extends React.Component<any, any> {
  public render() {
    return (
      <Select
        value={this.state && this.state.option}
        optionList={optionList}
        onChange={option => this.setState({ option })}
        keyExtractor={(option: IOption) => option.value}
        renderOption={(option: IOption) => <div><div>{option.title}</div><small>{option.description}</small></div>}
        renderSelected={(option: IOption) => <div>{option ? option.title : 'please select an option'}</div>}
      />
    );
  }
}

storiesOf('Select', module)
  .add(
    'select 500 width',
    () => <div style={{ width: 500 }}><SelectStory /></div>
  )
  .add(
    'select 100% width',
    () => <div style={{ width: '100%' }}><SelectStory /></div>
  )
  .add(
    'select no width set',
    () => <div><SelectStory /></div>
  )
  .add(
    'select multiple',
    () => <div style={{ width: 500 }}><SelectStory /><SelectStory /><SelectStory /><SelectStory /></div>
  );
