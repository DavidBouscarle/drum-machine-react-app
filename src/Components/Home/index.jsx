import styled from "styled-components";

import BUTTON_LIST from "../../constant/buttonList";

import GridButton from "./GridButton";

const Index = () => {
    return (
        <Wrapper>
            <Grid>
                {BUTTON_LIST.map((item, index) => (
                    <GridButton key={index}>{item.name}</GridButton>
                ))}
            </Grid>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    padding: 2rem;
    border: 1px solid;
    border-radius: ${(props) => props.theme.borderRadius};
`;

const Grid = styled.div`
    width: 50rem;
    height: 50rem;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(4, 1fr);
    gap: 1rem;
    grid-template-areas:
        ". . . ."
        ". . . ."
        ". . . ."
        ". . . .";
`;

export default Index;
