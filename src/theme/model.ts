export enum THEME_TYPE {
  DEFAULT = 'default'
}

export interface ThemeColorsContract {
  primary: string;
  body: string;
  logo: string;
  link: string;
  text: string;
  light: string;
  button: {
    text: string;
    background: string;
  };
  infobox: {
    background: string;
    alpha: string;
    opacity: number;
  };
}

export interface ThemeFontsContract {
  Montserrat: string;
  OpenSans: string;
}

export interface ITheme {
  name: string;
  colors: ThemeColorsContract;
  fonts: ThemeFontsContract;
}
