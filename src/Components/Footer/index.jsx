import styled from "styled-components";

const Index = () => {
    return (
        <Footer>
            <p>Drum Machine React App</p>
        </Footer>
    )
}

const Footer = styled.footer`
    height: 6rem;
    padding: 0 4rem;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export default Index;