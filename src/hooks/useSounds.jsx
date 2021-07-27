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

    useEffect(() => {
        const sampler = new Tone.Sampler({
            "C4": kick1,
            "C#4": kick2,
            "D4": kick3,
            "D#4": snare1,
            "E4": snare2,
            "F4": hh1,
            "F#4": hh2,
            "G4": hh3,
            "G#4": crash1,
            "A4": crash2,
            "A#4": ride1,
            "B4": ride2,
            "C5": ride3,
            "C#5": tom1,
            "D5": tom2,
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

    const soundPlay = (note) => {
        if (mySampler.current) {
            mySampler.current.triggerAttackRelease([note], 4);
        }
    };

    const buttonsList = [
        {
            soundPlay: () => soundPlay("C4"),
            isPlayed: kick1IsPlayed,
        },
        {
            soundPlay: () => soundPlay("C#4"),
            isPlayed: kick2IsPlayed,
        },
        {
            soundPlay: () => soundPlay("D4"),
            isPlayed: kick3IsPlayed,
        },
        {
            soundPlay: () => soundPlay("D#4"),
            isPlayed: snare1IsPlayed,
        },
        {
            soundPlay: () => soundPlay("E4"),
            isPlayed: snare2IsPlayed,
        },
        {
            soundPlay: () => soundPlay("F4"),
            isPlayed: hh1IsPlayed,
        },
        {
            soundPlay: () => soundPlay("F#4"),
            isPlayed: hh2IsPlayed,
        },
        {
            soundPlay: () => soundPlay("G4"),
            isPlayed: hh3IsPlayed,
        },
        {
            soundPlay: () => soundPlay("G#4"),
            isPlayed: crash1IsPlayed,
        },
        {
            soundPlay: () => soundPlay("A4"),
            isPlayed: crash2IsPlayed,
        },
        {
            soundPlay: () => soundPlay("A#4"),
            isPlayed: ride1IsPlayed,
        },
        {
            soundPlay: () => soundPlay("B4"),
            isPlayed: ride2IsPlayed,
        },
        {
            soundPlay: () => soundPlay("C5"),
            isPlayed: ride3IsPlayed,
        },
        {
            soundPlay: () => soundPlay("C#5"),
            isPlayed: tom1IsPlayed,
        },
        {
            soundPlay: () => soundPlay("D5"),
            isPlayed: tom2IsPlayed,
        },
        {
            soundPlay: () => soundPlay("D#5"),
            isPlayed: tom3IsPlayed,
        },
    ];

    return { buttonsList };
};

export default useSounds;
