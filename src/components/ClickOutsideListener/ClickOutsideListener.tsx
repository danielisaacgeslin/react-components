import * as React from 'react';

export interface IClickOutsideListenerProps {
  onClickOutside: () => void;
  children?: any;
  document?: Document | Element;
  insideRef?: Element;
}

export default class ClickOutsideListener extends React.PureComponent<IClickOutsideListenerProps> {
  public static defaultProps: IClickOutsideListenerProps = {
    document: window.document,
    insideRef: null,
    onClickOutside: /* istanbul ignore next */ () => null
  };

  public ref = React.createRef<HTMLDivElement>();

  public componentDidMount() {
    const { document } = this.props;
    document.addEventListener('mousedown', this.handleClick);
  }

  public componentWillUnmount() {
    const { document } = this.props;
    document.removeEventListener('mousedown', this.handleClick);
  }

  public handleClick = event => {
    const { onClickOutside } = this.props;
    const insideRef = this.props.insideRef || this.ref.current;
    if (insideRef && !insideRef.contains(event.target)) onClickOutside();
  };

  public render() {
    const { children } = this.props;
    return (
      <div key="click-outside-listener" ref={this.ref}>
        {children}
      </div>
    );
  }
}
