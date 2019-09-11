import * as React from 'react';
import { Props } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
export interface IIconProps extends Props {
    icon: IconProp;
}
export default class Icon extends React.PureComponent<IIconProps> {
    render(): JSX.Element;
}
