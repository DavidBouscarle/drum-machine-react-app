import styled from "styled-components";

const Index = ({ handleToggleTheme, isLight }) => {
    return (
        <Header>
            <h1>Drum Machine || David Bouscarle</h1>
            <button onClick={handleToggleTheme}>Switch Theme {isLight ? "Dark" : "Light"} Theme</button>
        </Header>
    )
}

const Header = styled.header`
    height: 6rem;
    padding: 0 4rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export default Index;