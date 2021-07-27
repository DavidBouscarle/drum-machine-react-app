import styled from "styled-components";

const GridButton = ({ isPlayed = false, soundPlay, id, handleAddSample }) => {
    return (
        <Button isPlayed={isPlayed} onClick={soundPlay}>
            <label
                htmlFor={id}
                onClick={(event) => {
                    event.stopPropagation();
                }}
            >
                🎵
            </label>
            <input
                id={id}
                type="file"
                onClick={(event) => {
                    event.stopPropagation();
                }}
                onChange={handleAddSample}
            />
        </Button>
    );
};

const Button = styled.button`
    position: relative;
    background-color: rgb(82, 63, 255);
    background: radial-gradient(
        circle,
        rgba(82, 63, 255, 1) 0%,
        rgba(0, 0, 0, 0.8) 100%
    );
    border: none;
    overflow: hidden;

    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 0;
        background: rgb(64, 255, 63);
        background: radial-gradient(
            circle,
            rgba(64, 255, 63, 1) 10%,
            rgba(18, 18, 18, 0.8) 100%
        );
        opacity: ${(props) => (props.isPlayed ? "1" : "0")};
        transition: ${(props) => props.theme.transition};
    }

    &:hover::before {
        opacity: 1;
    }

    &:active::before {
        background: rgb(64, 255, 63);
        background: radial-gradient(
            circle,
            rgba(64, 255, 63, 1) 30%,
            rgba(18, 18, 18, 0.8) 100%
        );
    }

    & input {
        display: none;
    }

    & label {
        position: absolute;
        top: 1rem;
        right: 1rem;
        font-size: 1.5rem;
    }
`;

export default GridButton;
