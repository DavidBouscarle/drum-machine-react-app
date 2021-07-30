import styled from "styled-components";

const Index = () => {
    return (
        <Wrapper>
            <section>
                <h2>Hi There !</h2>
                <p>
                    This is a project demo coded by David Bouscarle; You can
                    find the source code on github on this following link : {` `}
                    <a
                        href="https://github.com/vikingsurfeur/drum-machine-react-app"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Click here
                    </a>
                </p>
                <h3>Features :</h3>
                <ul>
                    <li>
                        <h5>Play with your Keyboard !</h5>
                        <p>
                            You can play the notes with your keyboard, key map :
                            A to T, Q to G and W to N.
                        </p>
                        <p>You can also play the notes with your mouse...</p>
                    </li>
                    <li>
                        <h5>You can record that's what you play !</h5>
                        <p>
                            Press the record button and the stop button when you
                            finished
                        </p>
                        <p>And click play to enjoy your sound !</p>
                    </li>
                    <li>
                        <h5>Upload your Sound !</h5>
                        <p>
                            You can upload your own sound by clicking on the
                            note in the up right corner.
                        </p>
                    </li>
                </ul>
                <p>
                    Well... Sometimes... I take some photographs : {` `}
                    <a href="https://www.behance.net/davidbouscarle">
                        Click here
                    </a>
                </p>
                <p>
                    Sounds Credit :{" "}
                    <a
                        href="https://reverb.com/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Reverb.com
                    </a>
                </p>
                <h6>That's all folks!</h6>
            </section>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    section {
        padding: 3rem 0;

        h2,
        h3 {
            margin: 3rem 0 2.2rem 0;
        }

        h3 {
            display: inline-block;
            border-bottom: 1px solid ${(props) => props.theme.mainColor};
            padding-bottom: 0.5rem;
        }

        p {
            margin-bottom: 2rem;
            a {
                position: relative;
            }
            a:before {
                position: absolute;
                content: "";
                bottom: 0;
                left: 0;
                width: 100%;
                height: 1px;
                transform-origin: left;
                transform: scale(0);
                background: ${(props) => props.theme.mainColor};
                transition: ${(props) => props.theme.transition};
            }
            a:hover:before {
                transform: scale(1);
            }
        }

        p:nth-child(5) {
            margin-top: 6rem;
        }

        ul {
            li {
                margin-left: 2rem;

                h5 {
                    margin-bottom: 1.5rem;
                }

                p:last-child {
                    margin-bottom: 2.5rem;
                }
            }
        }
    }
`;

export default Index;
