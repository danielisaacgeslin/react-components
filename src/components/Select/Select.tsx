import React, { memo, useCallback, useState, useRef } from 'react';
import { css } from 'aphrodite/no-important';

import Icon from '../Icon';
import Dropdown from '../Dropdown';
import styles from './styles';
import { ClickOutsideListener } from '../index';

export interface ISelectProps {
  value: any;
  optionList: any[];
  maxHeight?: number;
  onChange: (value: any) => void;
  keyExtractor: (option: any) => string | number;
  renderSelected: (option: any) => JSX.Element;
  renderOption: (option: any) => JSX.Element;
}

const Select = ({ value, optionList, maxHeight = 350, onChange, keyExtractor, renderSelected, renderOption }: ISelectProps) => {
  const [isOpen, setOpen] = useState<boolean>(false);
  const open = useCallback(() => setOpen(true), [setOpen]);
  const close = useCallback(() => setOpen(false), [setOpen]);

  const ref = useRef<HTMLDivElement>();

  const onSelect = useCallback(
    option => () => {
      onChange(option);
      close();
    },
    [onChange, close]
  );

  return (
    <div ref={ref} key="Select" className={css(styles.container)}>
      <ClickOutsideListener onClickOutside={close}>
        <div data-testid="select" className={css(styles.selectedContainer)} onClick={open}>
          <div>{renderSelected(value)}</div>
          <Icon icon="angle-down" />
        </div>
        <Dropdown isOpen={isOpen}>
          <div className={css(styles.optionListContainer)} style={{ width: ref.current && ref.current.offsetWidth, maxHeight }}>
            {optionList.map(option => (
              <div
                data-testid="select-option"
                className={css([styles.optionContainer, value === option && styles.active])}
                key={keyExtractor(option)}
                onClick={onSelect(option)}
              >
                {renderOption(option)}
              </div>
            ))}
          </div>
        </Dropdown>
      </ClickOutsideListener>
    </div>
  );
};

export default memo(Select);
