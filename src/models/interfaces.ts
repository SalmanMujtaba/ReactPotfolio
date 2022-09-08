interface ICommon {
  className?: string;
  children?: Children;
}
export interface IMargin {
  marginTop?: string,
  marginBottom?: string,
  marginLeft?: string,
  marginRight?: string
}
type Children = React.ReactNode;

export interface ICard extends ICommon {
  title?: string;
  enableHover?: string;
  height?: string;
  width?: string;
}


export interface IButton extends ICommon {
  handleClick: () => void
}