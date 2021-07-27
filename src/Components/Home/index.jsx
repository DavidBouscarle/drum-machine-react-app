import styled from "styled-components";

import useSounds from "../../hooks/useSounds";

import GridButton from "./GridButton";

const Index = () => {
    const { buttonsList } = useSounds();
    
    return (
        <Wrapper>
            <Grid>
                {buttonsList.map(
                    ({ soundPlay, isPlayed, id, handleAddSample }, index) => (
                        <GridButton
                            key={index}
                            soundPlay={soundPlay}
                            isPlayed={isPlayed}
                            id={id}
                            handleAddSample={handleAddSample}
                        />
                    )
                )}
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
