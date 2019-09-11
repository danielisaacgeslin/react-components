import React, { PureComponent } from 'react';
import { css } from 'aphrodite/no-important';

import Icon from '../Icon';
import styles from './styles';

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
  public static defaultProps = {
    defaultOpen: true,
    iconOpen: <Icon icon={'angle-up'} />,
    iconCollapsed: <Icon icon={'angle-down'} />
  };

  public state: ICollapsibleState = {
    isOpen: false,
    height: 0
  };

  public ref = React.createRef<HTMLDivElement>();

  public componentDidMount(): void {
    const { defaultOpen } = this.props;
    this.setState({ isOpen: defaultOpen });
  }
  public componentDidUpdate(prevProps: ICollapsibleProps, prevState: ICollapsibleState): void {
    const { height } = prevState;
    setTimeout(() => {
      /* istanbul ignore if */
      if (this.ref.current && this.ref.current.scrollHeight !== height) this.setState({ height: this.ref.current.scrollHeight });
    });
  }

  public toggleCollapsible = () => this.setState(state => ({ ...state, isOpen: !state.isOpen }));

  public render() {
    const { children, title, iconOpen, iconCollapsed } = this.props;
    const { isOpen, height } = this.state;

    return (
      <div key="Collapsible">
        <header className={css(styles.header)}>
          {typeof title === 'string' ? <span className={css(styles.title)}>{title}</span> : title}
          <div data-attribute="button-toggle" className={css(styles.icon)} onClick={this.toggleCollapsible}>
            {isOpen ? iconOpen : iconCollapsed}
          </div>
        </header>
        <div ref={this.ref} className={css(styles.bodyContainer)} style={{ height: isOpen ? height : 0 }}>
          {children}
        </div>
      </div>
    );
  }
}
