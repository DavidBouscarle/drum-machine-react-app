import styled from "styled-components";

const Index = ({ handleToggleTheme, isLight }) => {
    return (
        <Footer>
            <p>Drum Machine React App</p>
            <button onClick={handleToggleTheme}>
                Switch Theme To {isLight ? "Dark" : "Light"} Theme
            </button>
        </Footer>
    )
}

const Footer = styled.footer`
    height: 8rem;
    padding: 0 4rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export default Index;