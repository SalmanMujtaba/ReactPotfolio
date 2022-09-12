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
export type Children = React.ReactNode;

export interface ICard extends ICommon {
  enableHover?: string;
  height?: string;
  contentClassName?: string;
  width?: string;
  footer?: React.ReactNode | Children;
  Body?: React.ReactNode;
  title?: string;
  Title?: React.ReactNode;
}

type Link = {
  isLink: boolean,
  linkClassName?: string,

}
export interface InterfaceIcon extends ICommon {
  height?: string;
  width?: string;
  src: string;
  alt: string;
  iconType?: string;
}

export interface IButton extends ICommon {
  handleClick: () => void
}