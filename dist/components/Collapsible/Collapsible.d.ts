import React, { PureComponent } from 'react';
export interface ICollapsibleProps {
    title: string | React.ReactElement;
    defaultOpen?: boolean;
    iconOpen?: React.ReactElement;
    iconCollapsed?: React.ReactElement;
}
export interface ICollapsibleState {
    isOpen: boolean;
    height: number;
}
export default class Collapsible extends PureComponent<ICollapsibleProps, ICollapsibleState> {
    static defaultProps: {
        defaultOpen: boolean;
        iconOpen: JSX.Element;
        iconCollapsed: JSX.Element;
    };
    state: ICollapsibleState;
    ref: React.RefObject<HTMLDivElement>;
    componentDidMount(): void;
    componentDidUpdate(prevProps: ICollapsibleProps, prevState: ICollapsibleState): void;
    toggleCollapsible: () => void;
    render(): JSX.Element;
}
