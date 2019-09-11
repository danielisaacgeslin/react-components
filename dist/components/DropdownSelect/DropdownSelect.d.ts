import * as React from 'react';
export interface IDropdownSelectProps {
    label: string;
    initialValue: string[];
    optionList: {
        value: string;
        label: string;
    }[];
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
    static defaultProps: {
        label: string;
        initialValue: any[];
        optionList: any[];
        showChips: boolean;
        onOpen: () => any;
        onClose: () => any;
    };
    state: IDropdownSelectState;
    ref: React.RefObject<HTMLDivElement>;
    componentDidMount(): void;
    toggleOpen: (open: boolean) => () => void;
    toggleOption: (selected: string, isTemp: boolean) => () => void;
    clear: () => void;
    render(): JSX.Element;
}
