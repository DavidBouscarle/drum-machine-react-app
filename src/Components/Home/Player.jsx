import styled from "styled-components";

const Player = () => {
    return (
        <Wrapper>
            <div>
                <button id="play" onClick={(event) => {
                    event.stopPropagation();
                }}>Play</button>
                <button id="record" onClick={(event) => {
                    event.stopPropagation();
                }}>Record</button>
                <button id="stop" onClick={(event) => {
                    event.stopPropagation();
                }}>Stop</button>
            </div>
            <RecordLed id="recordLed"></RecordLed>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    button {
        margin: 2rem 2rem 2rem 0;
    }
`;

const RecordLed = styled.div`
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    border: 1px solid;
    background-color: transparent;
`;

export default Player;
