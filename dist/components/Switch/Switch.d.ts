import * as React from 'react';
export interface ISwitchProps {
    checked: boolean;
    disabled?: boolean;
    checkedColor?: string;
    checkedLabel?: string;
    unCheckedColor?: string;
    unCheckedLabel?: string;
    onChange: () => void;
}
export default class Switch extends React.PureComponent<ISwitchProps> {
    static defaultProps: {
        disabled: boolean;
        checkedColor: string;
        unCheckedColor: string;
        checkedLabel: string;
        unCheckedLabel: string;
    };
    onChange: () => void;
    render(): JSX.Element;
}
