import { ITheme, THEME_TYPE } from "./model";
import Themes from "./theme.json";

export const useCustomTheme = (identifier = THEME_TYPE.DEFAULT): ITheme => {
  return Themes[identifier];
};
