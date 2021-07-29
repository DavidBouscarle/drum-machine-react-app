import styled from "styled-components";

import useSounds from "../../hooks/useSounds";

import GridButton from "./GridButton";
import Player from "./Player";

const Index = () => {
    const { buttonsList } = useSounds();
    
    return (
        <Wrapper>
            <Player />
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
    box-shadow: 
        rgba(20, 20, 20, 0.1) 0px 2px 1px, 
        rgba(20, 20, 20, 0.1) 0px 4px 2px, 
        rgba(20, 20, 20, 0.1) 0px 8px 4px, 
        rgba(20, 20, 20, 0.1) 0px 16px 8px, 
        rgba(20, 20, 20, 0.1) 0px 32px 16px;
    border-radius: ${(props) => props.theme.borderRadius};
`;

const Grid = styled.div`
    width: 30rem;
    height: 30em;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(4, 1fr);
    gap: 1rem;
    grid-template-areas:
        ". . . ."
        ". . . ."
        ". . . ."
        ". . . .";
    @media screen and (min-width: 768px) {
        width: 60rem;
        height: 60rem;
    }
`;

export default Index;
