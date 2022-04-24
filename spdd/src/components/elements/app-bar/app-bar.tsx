import React from 'react';
import AppBar, {AppBarProps} from '@mui/material/AppBar';
import {styled} from '@mui/material/styles';


interface Props {
  children?: React.ReactNode;
  className?: any
  color?: "primary" | "secondary" | "tertiary" | "control" | "warning" | "error" | "info" | "success" | undefined
  position?: "fixed" | "absolute" | "relative" | "static" | "sticky" | undefined
}

const CssAppBar = styled(AppBar)<AppBarProps>(({theme}) => ({
  zIndex: 1000,
  boxShadow: "0 3px 13px 0 rgba(0, 0, 0, 0.04)",
  "@media only screen and (max-width : 1023px)": {
    boxShadow: "0 3px 57px 0 rgba(0, 0, 0, 0.06)",
  },
  "@media only screen and (max-width : 639px)": {
    boxShadow: "box-shadow: 0 3px 18px 0 rgba(0, 0, 0, 0.06);",
  },
}));


export const CustomAppBar = (props: Props) => {
  const {children, className, color, position, ...rest} = props;

  return (
    <CssAppBar color={color} className={className} position={position} {...rest}>
      {children}
    </CssAppBar>
  );
}

export default CustomAppBar;

