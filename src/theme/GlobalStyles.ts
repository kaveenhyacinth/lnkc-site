import {createGlobalStyle} from "styled-components";
import {ITheme} from "./model";

export const GlobalStyles = createGlobalStyle`
    html {
        margin: 0;
        padding: 0;
    }

    body {
        margin: 0;
        padding: 0;
        background: ${({theme}) => (theme as ITheme).colors.body};
        color: ${({theme}) => (theme as ITheme).colors.text};
        font-family: ${({theme}) => (theme as ITheme).fonts.OpenSans};
    }

    a {
        font-family: ${({theme}) => (theme as ITheme).fonts.OpenSans}, sans-serif;
        font-size: 12px;
        color: ${({theme}) => (theme as ITheme).colors.link};
        cursor: pointer;
    }

    p {
        font-family: ${({theme}) => (theme as ITheme).fonts.OpenSans}, sans-serif;
        font-size: 14px;
        color: ${({theme}) => (theme as ITheme).colors.text};
    }

    button {
        border: 0;
        display: inline-block;
        padding: 12px 24px;
        font-size: 16px;
        border-radius: 8px;
        margin-top: 5px;
        cursor: pointer;
        background-color: ${({theme}) =>
                (theme as ITheme).colors.button.background};
        color: ${({theme}) => (theme as ITheme).colors.button.text};
        font-family: ${({theme}) => (theme as ITheme).fonts.Montserrat};
        font-weight: 600;

        &:hover {
            background-color: ${({theme}) => (theme as ITheme).colors.button.text};
            color: ${({theme}) => (theme as ITheme).colors.button.background};
        }

        &:disabled {
            background-color: ${({theme}) =>
                    (theme as ITheme).colors.button.background};
        }
    }
`;
