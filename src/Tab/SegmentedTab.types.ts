export interface SegmentedTabProps {
  style?: React.CSSProperties;
  label?: React.ReactNode;
  disabled?: boolean;
  icon?: any;
  wrapped?: boolean;
  selected?: boolean;
  value?: any;
  onClick?: () => void;
  width?: number | string;
  height?: number | string;
  fontSize?: number | string;
  flex?: number;
}
