import React from 'react';
export interface ISelectProps {
    value: any;
    optionList: any[];
    maxHeight?: number;
    onChange: (value: any) => void;
    keyExtractor: (option: any) => string | number;
    renderSelected: (option: any) => JSX.Element;
    renderOption: (option: any) => JSX.Element;
}
declare const _default: React.MemoExoticComponent<({ value, optionList, maxHeight, onChange, keyExtractor, renderSelected, renderOption }: ISelectProps) => JSX.Element>;
export default _default;
