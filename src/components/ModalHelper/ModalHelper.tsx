import React from 'react';
import * as ReactDOM from 'react-dom';
import { safeParse } from 'utils/dist/utils';
import { Color } from 'utils/dist/models/general';

import ModalComponent, { IModalState } from './ModalComponent';

export default interface IModalOptions {
  title: string;
  body: JSX.Element;
  confirmText: string;
  confirmColor?: string;
  confirmBackground?: string;
  cancelText?: string;
  cancelColor?: string;
  cancelBackground?: string;
  invertBtns?: boolean;
}

export default abstract class ModalHelper {
  public static document = window.document;
  public static ModalComponent: React.PureComponent;

  public static mount(): void {
    if (ModalHelper.ModalComponent) return;
    const container = document.createElement('div');
    document.body.append(container);
    ModalHelper.ModalComponent = ReactDOM.render(<ModalComponent />, container) as any;
  }

  public static async confirm(options: IModalOptions): Promise<boolean> {
    const { title, body, confirmText, confirmColor, cancelText, cancelColor, confirmBackground, cancelBackground, invertBtns } = options;
    return new Promise(resolve => {
      const onConfirm = () => resolve(true);
      const onCancel = () => resolve(false);
      const props = {
        confirmText: 'Confirm',
        confirmColor: Color.WHITE,
        confirmBackground: Color.BLACK,
        cancelText: 'Cancel',
        cancelColor: Color.GRAY,
        cancelBackground: Color.WHITE,
        onConfirm,
        onCancel,
        invertBtns: false,
        isOpen: true
      };
      ModalHelper.ModalComponent.setState({
        ...props,
        title,
        body,
        ...safeParse(
          JSON.stringify({
            // removing undefined
            confirmText,
            confirmColor,
            confirmBackground,
            cancelText,
            cancelColor,
            cancelBackground,
            invertBtns
          })
        )
      } as IModalState);
    });
  }

  /* istanbul ignore next line */
  public static setDisabled(disabled: boolean) {
    ModalHelper.ModalComponent.setState({ disabled });
  }
}
