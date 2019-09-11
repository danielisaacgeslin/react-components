import * as React from 'react';
import { css } from 'aphrodite/no-important';

import ClickOutsideListener from '../ClickOutsideListener';
import Icon from '../Icon';
import Checkbox from '../Checkbox';
import styles from './styles';

export interface IDropdownSelectProps {
  label: string;
  initialValue: string[];
  optionList: { value: string; label: string }[];
  showChips?: boolean;
  onClose?: (value: string[]) => void;
  onOpen?: () => void;
}

export interface IDropdownSelectState {
  value: string[];
  tempValue: string[];
  isOpen: boolean;
}

export default class DropdownSelect extends React.PureComponent<IDropdownSelectProps, IDropdownSelectState> {
  public static defaultProps = {
    label: 'select options',
    initialValue: [],
    optionList: [],
    showChips: true,
    onOpen: /* istanbul ignore next */ () => null,
    onClose: /* istanbul ignore next */ () => null
  };

  public state: IDropdownSelectState = {
    value: [],
    tempValue: [],
    isOpen: false
  };

  public ref = React.createRef<HTMLDivElement>();

  public componentDidMount() {
    const { optionList, initialValue, onClose } = this.props;
    const value = initialValue.filter(v => !!optionList.find(option => option.value === v));
    this.setState({ value, tempValue: value });
    onClose(value);
  }

  public toggleOpen = (open: boolean) => () => {
    const { onClose, onOpen } = this.props;
    const { tempValue, isOpen } = this.state;
    if (open === isOpen) return;
    this.setState({ isOpen: open });
    if (!open) {
      this.setState({ value: tempValue });
      onClose(tempValue);
    } else {
      onOpen();
    }
  };

  public toggleOption = (selected: string, isTemp: boolean) => () => {
    const { onClose } = this.props;
    const { tempValue, value } = this.state;
    const newValue = tempValue.includes(selected) ? tempValue.filter(v => v !== selected) : [...tempValue, selected];
    this.setState({ tempValue: newValue, value: isTemp ? value : newValue });
    if (!isTemp) onClose(newValue);
  };

  public clear = () => {
    this.setState({ tempValue: [] });
  };

  public render() {
    const { label, optionList, showChips } = this.props;
    const { isOpen, value, tempValue } = this.state;
    const optionMap = optionList.reduce((total, curr) => ({ ...total, [curr.value]: curr.label }), {});
    return (
      <div key="DropdownSelect" className={css(styles.container)}>
        <ClickOutsideListener onClickOutside={this.toggleOpen(false)}>
          <button type="button" className={css(styles.button, styles.box)} onClick={this.toggleOpen(true)}>
            <span className={css(styles.buttonWrapper)}>
              {(showChips || !value.length) && label}
              {!showChips && !!value.length && `${label} (${value.length})`}
              <Icon icon="chevron-down" size="sm" className={css(styles.caret, isOpen && styles.caretRotate)} />
            </span>
          </button>
          {showChips &&
            value.map(itemValue => (
              <span
                key={itemValue}
                onClick={
                  !isOpen
                    ? this.toggleOption(itemValue, false)
                    : () => {
                        /** */
                      }
                }
                className={css(styles.chip)}
                data-testid="chip"
              >
                {optionMap[itemValue]} <Icon icon="times" />
              </span>
            ))}
          <div className={css(styles.dropdownContainer)}>
            {isOpen && (
              <div className={css(styles.dropdownBody, styles.box)}>
                {optionList.map(option => (
                  <div className={css(styles.option)} key={option.value} onClick={this.toggleOption(option.value, true)} data-testid="dropdown-option">
                    <Checkbox checked={tempValue.includes(option.value)} />
                    <span className={css(styles.optionLabel)}>{String(option.value)}</span>
                  </div>
                ))}
                <button className={css(styles.clear)} type="button" onClick={this.clear}>
                  Clear
                </button>
              </div>
            )}
          </div>
        </ClickOutsideListener>
      </div>
    );
  }
}
