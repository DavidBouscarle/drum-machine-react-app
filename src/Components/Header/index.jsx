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
    padding-bottom: 0.3rem;
    margin-left: 2rem;
    position: relative;
    border-bottom: 1px solid ${props => props.isCurrentPage ? "" : "transparent"};
    transition: ${props => props.theme.transition};

    &:before {
        position: absolute;
        bottom: -0.1rem;
        left: 0;
        width: 100%;
        height: 1px;
        transform-origin: left;
        transform: scale(0);
        background: ${(props) => props.theme.mainColor};
        content: "";
        transition: ${(props) => props.theme.transition};
    }
    &:hover:before {
        transform: scale(1);
    }

    @media screen and (min-width: 768px) {
        margin-left: 5rem;
    }
`;

export default Index;
