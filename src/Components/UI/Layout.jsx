import styled, { ThemeProvider } from "styled-components";
import { useState } from "react";

import GlobalStyle from "./GlobalStyle";

import lightTheme from "./themes/light.json";
import darkTheme from "./themes/dark.json";

const Layout = ({ children }) => {
    const [isLight, setIsLight] = useState(true);

    const handleToggleTheme = () => {
        setIsLight(!isLight);
    };

    return (
        <ThemeProvider theme={isLight ? lightTheme : darkTheme}>
            <Wrapper>
                <GlobalStyle />
                {children}
                <button onClick={handleToggleTheme}>Switch Theme {isLight ? "Dark" : "Light"} Theme</button>
            </Wrapper>
        </ThemeProvider>
    );
};

const Wrapper = styled.div``;

export default Layout;
