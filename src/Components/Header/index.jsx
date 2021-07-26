import { Link } from "react-router-dom";

import styled from "styled-components";

const Index = ({ handleToggleTheme, isLight }) => {
    return (
        <Header>
            <h1>Drum Machine || David Bouscarle</h1>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
            </nav>
            <button onClick={handleToggleTheme}>
                Switch Theme {isLight ? "Dark" : "Light"} Theme
            </button>
        </Header>
    );
};

const Header = styled.header`
    height: 6rem;
    padding: 0 4rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    & a:first-child {
        margin-right: 2rem;
    }
`;

export default Index;
