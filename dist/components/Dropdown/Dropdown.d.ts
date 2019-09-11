import React from 'react';
export interface IDropdownProps {
    isOpen: boolean;
    top?: number;
    bottom?: number;
    left?: number;
    right?: number;
    small?: boolean;
}
declare const _default: React.MemoExoticComponent<({ isOpen, top, bottom, left, right, small, children }: React.PropsWithChildren<IDropdownProps>) => JSX.Element>;
export default _default;
