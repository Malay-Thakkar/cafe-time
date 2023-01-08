import { createGlobalStyle } from "styled-components";
export const lighttheme = {
    body: '#FFFFF0',
    fontColor: '#0000'

};

export const darktheme = {
    body: 'rgb(40, 40, 43)',
    fontColor: '#ec4d37'

};

export const GlobalStyle = createGlobalStyle `
    body{
        background-color: ${props=>props.theme.body};
        color:${(props) => props.theme.fontColor};
    }
`;
