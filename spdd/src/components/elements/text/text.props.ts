import {ReactNode} from "react";

export interface TextProps {
  itemProp?: string

  children: ReactNode

  color: "primary" | "secondary" | "control.main" | "success.main" | "info.main" | "error.main" | "error.light" | "tertiary.main" |
    "grey.100" | "grey.200" | "grey.300" | "grey.400" | "grey.500" | "grey.600" | "grey.700" | "grey.800" | "grey.900" |
    "inherit" | undefined;

  typography?: "h1" | "h2" | "caption" | "body" | "subtitle" | "title"

  variant?: "body1" | "body2" | "button" | "caption" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "overline" | "subtitle1" | "subtitle2" | "span" | "inherit" | undefined

  align?: "center" | "justify" | "left" | "right" | "inherit"

  style?: any

  width?: string

  className?: string

  direction?: string

  zIndex?: number

  disabled?: boolean

  type?: "medium" | "bold" | "light" | "regular"
}
