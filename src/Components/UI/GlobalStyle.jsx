import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body {
        background-color: ${(props) => props.theme.backgroundColor};
        color: ${(props) => props.theme.mainColor};
        transition: ${(props) => props.theme.transition};
    }

    header, footer {
        box-shadow: ${(props) => props.theme.boxShadow};
    }

    button {
        padding: 1rem 2rem;
        background-color: ${(props) => props.theme.backgroundColor};
        color: ${(props) => props.theme.mainColor};
        border: 1px solid;
        border-radius: ${(props) => props.theme.borderRadius};
        transition: ${(props) => props.theme.transition};
    }

    button:hover {
        color: ${(props) => props.theme.backgroundColor};
        background-color: ${(props) => props.theme.mainColor};
    }

    .active {
        color: ${(props) => props.theme.backgroundColor};
        background-color: ${(props) => props.theme.mainColor};
    }
`;

export default GlobalStyle;
