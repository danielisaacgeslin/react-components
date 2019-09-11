import { PureComponent } from 'react';
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
    state: IModalState;
    close: () => void;
    wrapOnClose: (fn: Function) => () => void;
    render(): JSX.Element;
}
