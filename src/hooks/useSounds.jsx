import { useState, useEffect, useRef } from "react";

import * as Tone from "tone";

import kick1 from "../assets/audio/kick/kick1.wav";
import kick2 from "../assets/audio/kick/kick2.wav";
import kick3 from "../assets/audio/kick/kick3.wav";
import hh1 from "../assets/audio/hi-hat/hi-hat1.wav";
import hh2 from "../assets/audio/hi-hat/hi-hat2.wav";
import hh3 from "../assets/audio/hi-hat/hi-hat3.wav";
import snare1 from "../assets/audio/snare/snare1.wav";
import snare2 from "../assets/audio/snare/snare2.wav";
import crash1 from "../assets/audio/crash/crash1.wav";
import crash2 from "../assets/audio/crash/crash2.wav";
import ride1 from "../assets/audio/ride/ride1.wav";
import ride2 from "../assets/audio/ride/ride2.wav";
import ride3 from "../assets/audio/ride/ride3.wav";
import tom1 from "../assets/audio/tom/tom1.wav";
import tom2 from "../assets/audio/tom/tom2.wav";
import tom3 from "../assets/audio/tom/tom3.wav";

const useSounds = () => {
    const mySampler = useRef(null);

    const [kick1IsPlayed, setKick1IsPlayed] = useState(false);
    const [kick2IsPlayed, setKick2IsPlayed] = useState(false);
    const [kick3IsPlayed, setKick3IsPlayed] = useState(false);
    const [hh1IsPlayed, setHh1IsPlayed] = useState(false);
    const [hh2IsPlayed, setHh2IsPlayed] = useState(false);
    const [hh3IsPlayed, setHh3IsPlayed] = useState(false);
    const [snare1IsPlayed, setSnare1IsPlayed] = useState(false);
    const [snare2IsPlayed, setSnare2IsPlayed] = useState(false);
    const [crash1IsPlayed, setCrash1IsPlayed] = useState(false);
    const [crash2IsPlayed, setCrash2IsPlayed] = useState(false);
    const [ride1IsPlayed, setRide1IsPlayed] = useState(false);
    const [ride2IsPlayed, setRide2IsPlayed] = useState(false);
    const [ride3IsPlayed, setRide3IsPlayed] = useState(false);
    const [tom1IsPlayed, setTom1IsPlayed] = useState(false);
    const [tom2IsPlayed, setTom2IsPlayed] = useState(false);
    const [tom3IsPlayed, setTom3IsPlayed] = useState(false);

    const [recordedSound, setRecordedSound] = useState(null);
    const [bufferSize, setBufferSize] = useState(null);
    const [recordedSoundDuration, setRecordedSoundDuration] = useState(0);

    useEffect(() => {
        const sampler = new Tone.Sampler({
            C4: kick1,
            "C#4": kick2,
            D4: kick3,
            "D#4": snare1,
            E4: snare2,
            F4: hh1,
            "F#4": hh2,
            G4: hh3,
            "G#4": crash1,
            A4: crash2,
            "A#4": ride1,
            B4: ride2,
            C5: ride3,
            "C#5": tom1,
            D5: tom2,
            "D#5": tom3,
        }).toDestination();

        Tone.loaded().then(() => {
            mySampler.current = sampler;
        });
    }, []);

    useEffect(() => {
        const handleKeyDown = ({ key }) => {
            switch (key) {
                case "a":
                    setKick1IsPlayed(true);
                    soundPlay("C4");
                    setTimeout(() => {
                        setKick1IsPlayed(false);
                    }, 250);
                    break;
                case "z":
                    setKick2IsPlayed(true);
                    soundPlay("C#4");
                    setTimeout(() => {
                        setKick2IsPlayed(false);
                    }, 250);
                    break;
                case "e":
                    setKick3IsPlayed(true);
                    soundPlay("D4");
                    setTimeout(() => {
                        setKick3IsPlayed(false);
                    }, 250);
                    break;
                case "r":
                    setHh1IsPlayed(true);
                    soundPlay("D#4");
                    setTimeout(() => {
                        setHh1IsPlayed(false);
                    }, 250);
                    break;
                case "t":
                    setHh2IsPlayed(true);
                    soundPlay("E4");
                    setTimeout(() => {
                        setHh2IsPlayed(false);
                    }, 250);
                    break;
                case "q":
                    setHh3IsPlayed(true);
                    soundPlay("F4");
                    setTimeout(() => {
                        setHh3IsPlayed(false);
                    }, 250);
                    break;
                case "s":
                    setSnare1IsPlayed(true);
                    soundPlay("F#4");
                    setTimeout(() => {
                        setSnare1IsPlayed(false);
                    }, 250);
                    break;
                case "d":
                    setSnare2IsPlayed(true);
                    soundPlay("G4");
                    setTimeout(() => {
                        setSnare2IsPlayed(false);
                    }, 250);
                    break;
                case "f":
                    setCrash1IsPlayed(true);
                    soundPlay("G#4");
                    setTimeout(() => {
                        setCrash1IsPlayed(false);
                    }, 250);
                    break;
                case "g":
                    setCrash2IsPlayed(true);
                    soundPlay("A4");
                    setTimeout(() => {
                        setCrash2IsPlayed(false);
                    }, 250);
                    break;
                case "w":
                    setRide1IsPlayed(true);
                    soundPlay("A#4");
                    setTimeout(() => {
                        setRide1IsPlayed(false);
                    }, 250);
                    break;
                case "x":
                    setRide2IsPlayed(true);
                    soundPlay("B4");
                    setTimeout(() => {
                        setRide2IsPlayed(false);
                    }, 250);
                    break;
                case "c":
                    setRide3IsPlayed(true);
                    soundPlay("C5");
                    setTimeout(() => {
                        setRide3IsPlayed(false);
                    }, 250);
                    break;
                case "v":
                    setTom1IsPlayed(true);
                    soundPlay("C#5");
                    setTimeout(() => {
                        setTom1IsPlayed(false);
                    }, 250);
                    break;
                case "b":
                    setTom2IsPlayed(true);
                    soundPlay("D5");
                    setTimeout(() => {
                        setTom2IsPlayed(false);
                    }, 250);
                    break;
                case "n":
                    setTom3IsPlayed(true);
                    soundPlay("D#5");
                    setTimeout(() => {
                        setTom3IsPlayed(false);
                    }, 250);
                    break;
                default:
                    break;
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, []);

    useEffect(() => {
        const recorder = new Tone.Recorder();

        const recordButton = document.getElementById("record");
        const playButton = document.getElementById("play");
        const stopButton = document.getElementById("stop");
        const recordLed = document.getElementById("recordLed");

        const blinkRecordLed = () => {
            recordLed.style.backgroundColor === "transparent"
                ? (recordLed.style.backgroundColor = "crimson")
                : (recordLed.style.backgroundColor = "transparent");
        };
        let blinkInterval;

        const handleRecord = () => {
            if (recorder.state === "stopped") {
                mySampler.current.connect(recorder);
                recorder.start();
                recordButton.classList.add("active");
                blinkInterval = setInterval(blinkRecordLed, 250);
            } else {
                alert("Record is already started");
            }
        };

        const handleStopRecord = async () => {
            if (recorder.state === "started") {
                const recording = await recorder.stop();
                const blob = new Blob([recording], { type: "audio/wav" });
                const url = URL.createObjectURL(blob);
                const audio = document.createElement("audio");
                audio.src = url;
                setRecordedSound(audio);

                clearInterval(blinkInterval);
                recordLed.style.backgroundColor = "transparent";

                recordButton.classList.remove("active");

                try {
                    const blobData = await fetch(url);
                    const buffer = await blobData.arrayBuffer();
                    const bufferLength = buffer.byteLength;

                    const duration =
                        bufferLength / mySampler.current.context.sampleRate;
                    setRecordedSoundDuration(
                        duration *
                            (mySampler.current.context.sampleRate / 10000)
                    );

                    bufferLength > 0
                        ? setBufferSize(bufferLength)
                        : alert("Your record track is Empty");
                } catch (error) {
                    console.error(`Something get Wrong: ${error}`);
                }
            } else {
                alert("Recording is not started.");
            }
        };

        const handlePlay = () => {
            if (recordedSound && bufferSize > 0) {
                recordedSound.play();
                playButton.classList.add("active");
                setTimeout(() => {
                    playButton.classList.remove("active");
                }, recordedSoundDuration * 1000);
            } else {
                alert("Please record a sound first.");
            }
        };

        recordButton.addEventListener("click", handleRecord);
        playButton.addEventListener("click", handlePlay);
        stopButton.addEventListener("click", handleStopRecord);

        return () => {
            recordButton &&
                recordButton.removeEventListener("click", handleRecord);
            playButton && 
                playButton.removeEventListener("click", handlePlay);
            stopButton &&
                stopButton.removeEventListener("click", handleStopRecord);
        };
    }, [recordedSound, bufferSize, recordedSoundDuration]);

    const soundPlay = (note) => {
        if (mySampler.current) {
            mySampler.current.triggerAttackRelease([note], 4);
        }
    };

    const handleAddSample = (note, file) => {
        let fileURL = URL.createObjectURL(file);
        let buffer = new Tone.Buffer(fileURL);

        mySampler.current.add(note, buffer, () => {
            alert("Sample Successfully Downloaded");
        });
    };

    const buttonsList = [
        {
            soundPlay: () => soundPlay("C4"),
            isPlayed: kick1IsPlayed,
            id: "kick1",
            handleAddSample: (event) =>
                handleAddSample("C4", event.target.files[0]),
        },
        {
            soundPlay: () => soundPlay("C#4"),
            isPlayed: kick2IsPlayed,
            id: "kick2",
            handleAddSample: (event) =>
                handleAddSample("C#4", event.target.files[0]),
        },
        {
            soundPlay: () => soundPlay("D4"),
            isPlayed: kick3IsPlayed,
            id: "kick3",
            handleAddSample: (event) =>
                handleAddSample("D4", event.target.files[0]),
        },
        {
            soundPlay: () => soundPlay("D#4"),
            isPlayed: snare1IsPlayed,
            id: "snare1",
            handleAddSample: (event) =>
                handleAddSample("D#4", event.target.files[0]),
        },
        {
            soundPlay: () => soundPlay("E4"),
            isPlayed: snare2IsPlayed,
            id: "snare2",
            handleAddSample: (event) =>
                handleAddSample("E4", event.target.files[0]),
        },
        {
            soundPlay: () => soundPlay("F4"),
            isPlayed: hh1IsPlayed,
            id: "hh1",
            handleAddSample: (event) =>
                handleAddSample("F4", event.target.files[0]),
        },
        {
            soundPlay: () => soundPlay("F#4"),
            isPlayed: hh2IsPlayed,
            id: "hh2",
            handleAddSample: (event) =>
                handleAddSample("F#4", event.target.files[0]),
        },
        {
            soundPlay: () => soundPlay("G4"),
            isPlayed: hh3IsPlayed,
            id: "hh3",
            handleAddSample: (event) =>
                handleAddSample("G4", event.target.files[0]),
        },
        {
            soundPlay: () => soundPlay("G#4"),
            isPlayed: crash1IsPlayed,
            id: "crash1",
            handleAddSample: (event) =>
                handleAddSample("G#4", event.target.files[0]),
        },
        {
            soundPlay: () => soundPlay("A4"),
            isPlayed: crash2IsPlayed,
            id: "crash2",
            handleAddSample: (event) =>
                handleAddSample("A4", event.target.files[0]),
        },
        {
            soundPlay: () => soundPlay("A#4"),
            isPlayed: ride1IsPlayed,
            id: "ride1",
            handleAddSample: (event) =>
                handleAddSample("A#4", event.target.files[0]),
        },
        {
            soundPlay: () => soundPlay("B4"),
            isPlayed: ride2IsPlayed,
            id: "ride2",
            handleAddSample: (event) =>
                handleAddSample("B4", event.target.files[0]),
        },
        {
            soundPlay: () => soundPlay("C5"),
            isPlayed: ride3IsPlayed,
            id: "ride3",
            handleAddSample: (event) =>
                handleAddSample("C5", event.target.files[0]),
        },
        {
            soundPlay: () => soundPlay("C#5"),
            isPlayed: tom1IsPlayed,
            id: "tom1",
            handleAddSample: (event) =>
                handleAddSample("C#5", event.target.files[0]),
        },
        {
            soundPlay: () => soundPlay("D5"),
            isPlayed: tom2IsPlayed,
            id: "tom2",
            handleAddSample: (event) =>
                handleAddSample("D5", event.target.files[0]),
        },
        {
            soundPlay: () => soundPlay("D#5"),
            isPlayed: tom3IsPlayed,
            id: "tom3",
            handleAddSample: (event) =>
                handleAddSample("D#5", event.target.files[0]),
        },
    ];

    return { buttonsList };
};

export default useSounds;
