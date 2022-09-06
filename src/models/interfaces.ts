export interface IMargin {
  marginTop?: string,
  marginBottom?: string,
  marginLeft?: string,
  marginRight?: string
}
type Children = React.ReactNode;

export interface ICard {
  className?: string;
  children?: Children;
  title?: string;
  enableHover?: string;
}