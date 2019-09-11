import * as React from 'react';
import { FontAwesomeIcon, Props } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

export interface IIconProps extends Props {
  icon: IconProp;
}

export default class Icon extends React.PureComponent<IIconProps> {
  public render() {
    const { icon, ...props } = this.props;
    return <FontAwesomeIcon key="icon" icon={icon} {...props} />;
  }
}
