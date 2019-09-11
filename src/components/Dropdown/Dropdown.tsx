import React, { memo, useCallback } from 'react';
import { css } from 'aphrodite/no-important';

import styles from './styles';

export interface IDropdownProps {
  isOpen: boolean;
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
  small?: boolean;
}

const Dropdown = ({ isOpen, top, bottom, left, right, small, children }: React.PropsWithChildren<IDropdownProps>) => {
  const handleClick = useCallback((event: React.MouseEvent) => event.stopPropagation(), []);

  return (
    <div
      key="Dropdown"
      className={css([styles.container, isOpen && styles.open, small && styles.small])}
      style={{ top, bottom, left, right }}
      onClick={handleClick}
    >
      {isOpen && children}
    </div>
  );
};

export default memo(Dropdown);
