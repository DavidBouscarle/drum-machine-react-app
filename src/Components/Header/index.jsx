import { Link, useLocation } from "react-router-dom";

import styled from "styled-components";

const Index = () => {
    const location = useLocation();

    return (
        <Header>
            <h1>Drum Machine</h1>
            <nav>
                <Link to="/">
                    <MenuEl isCurrentPage={location.pathname === "/"}>
                        Home
                    </MenuEl>
                </Link>
                <Link to="/about">
                    <MenuEl isCurrentPage={location.pathname === "/about"}>
                        About
                    </MenuEl>
                </Link>
            </nav>
        </Header>
    );
};

const Header = styled.header`
    height: 8rem;
    padding: 0 3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media screen and (min-width: 768px) {
        padding: 0 4rem; 
    }
`;

const MenuEl = styled.p`
    display: inline-block;
    padding: 0.2rem 0;
    margin-left: 2rem;
    border-bottom: 1px solid ${props => props.isCurrentPage ? "" : "transparent"};
    transition: ${props => props.theme.transition};

    &:hover {
        border-bottom: 1px solid;
    }

    @media screen and (min-width: 768px) {
        margin-left: 5rem;
    }
`;

export default Index;
