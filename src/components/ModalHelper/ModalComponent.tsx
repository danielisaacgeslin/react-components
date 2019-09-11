import React, { PureComponent } from 'react';
import { css } from 'aphrodite/no-important';

import Icon from '../Icon/Icon';
import styles from './styles';

export interface IModalState {
  isOpen?: boolean;
  title?: string;
  body?: JSX.Element;
  confirmText?: string;
  confirmColor?: string;
  confirmBackground?: string;
  cancelText?: string;
  cancelColor?: string;
  cancelBackground?: string;
  disabled?: boolean;
  invertBtns?: boolean;
  onConfirm?: () => void;
  onCancel?: () => void;
}

export default class Modal extends PureComponent<{}, IModalState> {
  /* istanbul ignore next line */
  public state: IModalState = {
    isOpen: false,
    title: 'default',
    body: <div />,
    confirmText: 'Confirm',
    cancelText: 'Cancel',
    disabled: false,
    onConfirm: () => {
      /** */
    },
    onCancel: () => {
      /** */
    }
  };

  public close = () => this.setState({ isOpen: false });

  public wrapOnClose = (fn: Function) => () => {
    fn();
    this.close();
  };

  public render() {
    const {
      isOpen,
      title,
      body,
      onConfirm,
      onCancel,
      confirmText,
      confirmColor,
      confirmBackground,
      cancelText,
      cancelColor,
      cancelBackground,
      disabled,
      invertBtns
    } = this.state;

    return (
      isOpen && (
        <div data-testid="modal" key="Modal" className={css(styles.backdrop)}>
          <div className={css([styles.container, isOpen && styles.open])}>
            <header className={css(styles.headerContainer)}>
              <span className={css(styles.title)}>{title}</span>
              <div className={css(styles.headerBtn)} onClick={this.wrapOnClose(onCancel)}>
                <Icon icon="times" />
              </div>
            </header>
            <div className={css(styles.bodyContainer)}>{body}</div>
            <footer className={css([styles.footerContainer, invertBtns && styles.invertedFooterContainer])}>
              <button
                data-testid="modal-cancel"
                className={css(styles.btn)}
                style={invertBtns ? { color: confirmColor, background: confirmBackground } : { color: cancelColor, background: cancelBackground }}
                onClick={this.wrapOnClose(onCancel)}
              >
                {cancelText}
              </button>
              <button
                data-testid="modal-confirm"
                disabled={disabled}
                className={css([styles.btn, disabled && styles.disabled])}
                style={invertBtns ? { color: cancelColor, background: cancelBackground } : { color: confirmColor, background: confirmBackground }}
                onClick={this.wrapOnClose(onConfirm)}
              >
                {confirmText}
              </button>
            </footer>
          </div>
        </div>
      )
    );
  }
}
