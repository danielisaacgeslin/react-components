import * as React from 'react';
export interface IClickOutsideListenerProps {
    onClickOutside: () => void;
    children?: any;
    document?: Document | Element;
    insideRef?: Element;
}
export default class ClickOutsideListener extends React.PureComponent<IClickOutsideListenerProps> {
    static defaultProps: IClickOutsideListenerProps;
    ref: React.RefObject<HTMLDivElement>;
    componentDidMount(): void;
    componentWillUnmount(): void;
    handleClick: (event: any) => void;
    render(): JSX.Element;
}
