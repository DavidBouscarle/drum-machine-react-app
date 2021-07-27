import styled from "styled-components";

const Index = ({ handleToggleTheme, isLight }) => {
    return (
        <Footer>
            <p>Drum Machine React App || David Bouscarle</p>
            <button onClick={handleToggleTheme}>
                Switch Theme To {isLight ? "Dark" : "Light"} Theme
            </button>
        </Footer>
    )
}

const Footer = styled.footer`
    height: 8rem;
    padding: 0 3rem;
    display: flex;
    justify-content: center;
    align-items: center;

    p {
        display: none;
    }

    @media screen and (min-width: 768px) {
        padding: 0 4rem; 
        justify-content: space-between;

        p { 
            display: block; 
        }
    }
`;

export default Index;