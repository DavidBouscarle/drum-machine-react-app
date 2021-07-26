import styled, { ThemeProvider } from "styled-components";
import { useState } from "react";

import GlobalStyle from "./GlobalStyle";

import lightTheme from "./themes/light.json";
import darkTheme from "./themes/dark.json";

import Header from "../Header/index";
import Footer from "../Footer/index";

const Layout = ({ children }) => {
    const [isLight, setIsLight] = useState(true);

    const handleToggleTheme = () => {
        setIsLight(!isLight);
    };

    return (
        <ThemeProvider theme={isLight ? lightTheme : darkTheme}>
            <Wrapper>
                <GlobalStyle />
                <Header
                    isLight={isLight}
                    handleToggleTheme={handleToggleTheme}
                />
                <Main>{children}</Main>
                <Footer />
            </Wrapper>
        </ThemeProvider>
    );
};

const Wrapper = styled.div``;

const Main = styled.main`
    min-height: calc(100vh - 12rem);
    width: 90vw;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export default Layout;
