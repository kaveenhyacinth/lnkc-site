import { THEME_TYPE } from "./model";
import Themes from './theme.json';

export const getTheme = (identifier = THEME_TYPE.DEFAULT) => {
  return Themes[identifier]
}