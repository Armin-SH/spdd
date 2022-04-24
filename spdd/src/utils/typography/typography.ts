/**
 * You can find a list of available fonts on both iOS and Android here:
 * https://github.com/react-native-training/react-native-fonts
 *
 * If you're interested in adding a custom font to your project,
 * check out the readme file in ./assets/fonts/ then come back here
 * and enter your new font name. Remember the Android font name
 * is probably different than iOS.
 * More on that here:
 * https://github.com/lendup/react-native-cross-platform-text
 *
 * The various styles of fonts are defined in the <Text /> component.
 */

interface fontTypeProps {
  regular: string

  light: string

  bold: string

  medium: string
}

const fontType = <fontTypeProps>{
  /**
   * The primary font.  Used in most places.
   */
  regular: "IRANSansRegular",

  /**
   * The light font.
   */
  light: "IRANSansLight",

  /**
   * The bold font.
   */
  bold: "IRANSansBold",

  /**
   * The bold font.
   */
  medium: "IRANSansMedium",
};

export const typography = (fontType);