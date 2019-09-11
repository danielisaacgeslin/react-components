import * as React from 'react';
import { css } from 'aphrodite/no-important';

import styles from './styles';

export interface ISwitchProps {
  checked: boolean;
  disabled?: boolean;
  checkedColor?: string;
  checkedLabel?: string;
  unCheckedColor?: string;
  unCheckedLabel?: string;
  onChange: () => void;
}

export default class Switch extends React.PureComponent<ISwitchProps> {
  public static defaultProps = {
    disabled: false,
    checkedColor: '#444444',
    unCheckedColor: '#CCCCCC',
    checkedLabel: '',
    unCheckedLabel: ''
  };

  public onChange = () => {
    const { disabled, onChange } = this.props;
    if (!disabled) onChange();
  };

  public render() {
    const { checked, disabled, checkedColor, unCheckedColor, checkedLabel, unCheckedLabel } = this.props;
    const hasLabel = !!(checkedLabel || unCheckedLabel);
    return (
      <div key="Switch" style={{ display: 'inline-block' }} onClick={this.onChange}>
        <label
          className={css(styles.container, disabled && styles.disabled)}
          style={{ width: hasLabel ? 75 : 50, backgroundColor: checked ? checkedColor : unCheckedColor }}
        >
          <div className={css([styles.ballContainer, checked && styles.ballChecked])}>
            {hasLabel && <span className={css(styles.label)}>{checked ? checkedLabel : unCheckedLabel}</span>}
            <div className={css(styles.ball)} />
          </div>
        </label>
      </div>
    );
  }
}
