import React from 'react';
import Button from '@mui/material/Button'
import {ButtonProps} from './button.props';
import {styled} from '@mui/material/styles'
import Link from 'next/link'

const CssButton = styled(Button)<ButtonProps>((props: ButtonProps) => ({
  height: "38px",
  borderRadius: props.shape === "circle" ? '100%' : props.shape === "rounded" ? '19px' : '6px',
  minWidth: props.shape !== "rectangle" && props.shape !== "rounded" ? "38px" : "auto",
  width: props.shape !== "rectangle" && props.shape !== "rounded" ? "38px" : "auto",
  zIndex: 4,
  overflow: 'hidden',
  "@media only screen and (min-width: 1280px)": {
    height: "47px",
    minWidth: props.shape !== "rectangle" && props.shape !== "rounded" ? "47px" : "auto",
    width: props.shape !== "rectangle" && props.shape !== "rounded" ? "47px" : "auto",
    borderRadius: props.shape === "circle" ? '100%' : props.shape === "rounded" ? '23px' : '6px',
  },
  "@media only screen and (min-width: 1024px) and (max-width: 1279px)": {
    height: "44px",
    minWidth: props.shape !== "rectangle" && props.shape !== "rounded" ? "44px" : "auto",
    width: props.shape !== "rectangle" && props.shape !== "rounded" ? "44px" : "auto",
    borderRadius: props.shape === "circle" ? '100%' : props.shape === "rounded" ? '22px' : '6px',
  },
  "@media only screen and (min-width: 640px) and (max-width: 1023px)": {
    height: "36px",
    borderRadius: props.shape === "circle" ? '100%' : props.shape === "rounded" ? '18px' : '4px',
    minWidth: props.shape !== "rectangle" && props.shape !== "rounded" ? "36px" : "auto",
    width: props.shape !== "rectangle" && props.shape !== "rounded" ? "36px" : "auto",
  },
  boxShadow: 'none',
  "&:hover": {
    boxShadow: 'none',
  },
  "&:active": {
    boxShadow: 'none'
  },
  "&.MuiButton-sizeLarge": {
    "@media only screen and (min-width: 1280px)": {
      height: "63px",
      borderRadius: props.shape === "circle" ? '100%' : props.shape === "rounded" ? '31px' : '9px',
      minWidth: props.shape !== "rectangle" && props.shape !== "rounded" ? "63px" : "auto",
      width: props.shape !== "rectangle" && props.shape !== "rounded" ? "63px" : "auto",
    },
    "@media only screen and (min-width: 1024px) and (max-width: 1279px)": {
      height: "55px",
      minWidth: props.shape !== "rectangle" && props.shape !== "rounded" ? "55px" : "auto",
      width: props.shape !== "rectangle" && props.shape !== "rounded" ? "55px" : "auto",
      borderRadius: props.shape === "circle" ? '100%' : props.shape === "rounded" ? '27px' : '9px',
    },
    "@media only screen and (min-width: 640px) and (max-width: 1023px)": {
      height: "49px",
      borderRadius: props.shape === "circle" ? '100%' : props.shape === "rounded" ? '24px' : '9px',
      minWidth: props.shape !== "rectangle" && props.shape !== "rounded" ? "49px" : "auto",
      width: props.shape !== "rectangle" && props.shape !== "rounded" ? "49px" : "auto",
    },
    "@media only screen and (min-width: 424px) and (max-width: 639px)": {
      height: "40px",
      minWidth: props.shape !== "rectangle" && props.shape !== "rounded" ? "40px" : "auto",
      width: props.shape !== "rectangle" && props.shape !== "rounded" ? "40px" : "auto",
      borderRadius: props.shape === "circle" ? '100%' : props.shape === "rounded" ? '20px' : '9px',
    },
    height: '32px',
    minWidth: props.shape !== "rectangle" && props.shape !== "rounded" ? "32px" : "auto",
    width: props.shape !== "rectangle" && props.shape !== "rounded" ? "32px" : "auto",
    borderRadius: props.shape === "circle" ? '100%' : props.shape === "rounded" ? '16px' : '9px',
  },
  "&.MuiButton-sizeSmall": {
    "@media only screen and (min-width: 1280px)": {
      height: "31px",
      minWidth: props.shape !== "rectangle" && props.shape !== "rounded" ? "31px" : "auto",
      width: props.shape !== "rectangle" && props.shape !== "rounded" ? "31px" : "auto",
      borderRadius: props.shape === "circle" ? '100%' : props.shape === "rounded" ? '15px' : '6px',
    },
    "@media only screen and (min-width: 1024px) and (max-width: 1279px)": {
      height: "24px",
      minWidth: props.shape !== "rectangle" && props.shape !== "rounded" ? "24px" : "auto",
      width: props.shape !== "rectangle" && props.shape !== "rounded" ? "24px" : "auto",
      borderRadius: props.shape === "circle" ? '100%' : props.shape === "rounded" ? '12px' : '6px',
    },
    "@media only screen and (min-width: 768px) and (max-width: 1023px)": {
      height: "38px",
      minWidth: props.shape !== "rectangle" && props.shape !== "rounded" ? "38px" : "auto",
      width: props.shape !== "rectangle" && props.shape !== "rounded" ? "38px" : "auto",
      borderRadius: props.shape === "circle" ? '100%' : props.shape === "rounded" ? '19px' : '6px',
    },
    "@media  only screen and (min-width: 640px) and  (max-width: 767px)": {
      height: "22px",
      minWidth: props.shape !== "rectangle" && props.shape !== "rounded" ? "22px" : "auto",
      width: props.shape !== "rectangle" && props.shape !== "rounded" ? "22px" : "auto",
      borderRadius: props.shape === "circle" ? '100%' : props.shape === "rounded" ? '11px' : '6px',
    },
    height: "26px",
    minWidth: props.shape !== "rectangle" && props.shape !== "rounded" ? "26px" : "auto",
    width: props.shape !== "rectangle" && props.shape !== "rounded" ? "26px" : "auto",
    borderRadius: props.shape === "circle" ? '100%' : props.shape === "rounded" ? '13px' : '6px',
  },
}));

export const CustomButton = (props: ButtonProps) => {
  const {children, variant, color, endIcon, size, className, startIcon, disabled, onClick, href, LinkProps, shape, ...rest} = props;

  const Button = <CssButton
    shape={shape}
    disabled={disabled}
    onClick={onClick}
    className={className}
    color={color}
    variant={variant}
    endIcon={endIcon}
    startIcon={startIcon}
    size={size}
    {...rest}>
    {children}
  </CssButton>;

  if (href) {
    return (
      <Link href={href} passHref={true} {...LinkProps}>
        {Button}
      </Link>
    );
  }

  return (
    Button
  );
};

CustomButton.defaultProps = {
  color: "info",
  variant: "contained",
  shape: "rectangle",
};

export default CustomButton;
