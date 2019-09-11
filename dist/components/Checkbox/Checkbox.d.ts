import * as React from 'react';
export interface ICheckboxProps {
    checked: boolean;
    disabled?: boolean;
    radio?: boolean;
}
export default class Checkbox extends React.PureComponent<ICheckboxProps> {
    render(): JSX.Element;
}
