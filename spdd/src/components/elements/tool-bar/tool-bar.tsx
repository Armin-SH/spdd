import React from 'react';
import ToolBar, {ToolbarProps} from '@mui/material/Toolbar';
import {styled} from '@mui/material/styles';

interface Props {
  children?: React.ReactNode;
  className?: any
}

const CssToolBar = styled(ToolBar)<ToolbarProps>(({theme}) => ({
  "&.MuiToolbar-root": {
    "display": "flex",
    "alignItems": "center",
    "justifyContent": "space-between",
    "padding": 0,
    "minHeight": "30px",
    "zIndex": 1000,
  },
}))


export const CustomToolBar = (props: Props) => {
  const {children, className, ...rest} = props;

  return (
    <CssToolBar className={className} {...rest}>
      {children}
    </CssToolBar>
  );
}

export default CustomToolBar;

