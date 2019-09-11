import React from 'react';
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
    static document: Document;
    static ModalComponent: React.PureComponent;
    static mount(): void;
    static confirm(options: IModalOptions): Promise<boolean>;
    static setDisabled(disabled: boolean): void;
}
