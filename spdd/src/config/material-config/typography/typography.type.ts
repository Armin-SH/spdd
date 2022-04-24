interface FontType {
  fontFamily: string
  fontSize: string
  fontWeight?: number
  letterSpacing?: string
  lineHeight?: number
  "@media (max-width: 639px)"?: any
}

interface ButtonType {
  fontFamily: string
  fontSize: string
  fontWeight?: number
  letterSpacing?: string
  lineHeight?: number
  textTransform?: string
  "@media (max-width: 639px)"?: any
}


export interface TypographyType {
  body: any
  caption: any
  h1: any
  h2: any
  subtitle: any
  title: any
}
