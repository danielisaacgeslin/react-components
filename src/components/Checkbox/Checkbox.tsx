import * as React from 'react';
import { css } from 'aphrodite/no-important';

import styles from './styles';

export interface ICheckboxProps {
  checked: boolean;
  disabled?: boolean;
  radio?: boolean;
}

export default class Checkbox extends React.PureComponent<ICheckboxProps> {
  public render() {
    const { checked, disabled, radio } = this.props;
    return (
      <input
        key="Checkbox"
        type="checkbox"
        className={css(styles.block, radio && styles.radioType, !radio && styles.checkboxType)}
        checked={checked}
        disabled={!!disabled}
        readOnly={true}
      />
    );
  }
}
