import { useEffect, useRef } from "react";

import * as Tone from "tone";

import kick1 from '../assets/audio/kick/kick1.wav';
import kick2 from '../assets/audio/kick/kick2.wav';
import kick3 from '../assets/audio/kick/kick3.wav';
import hh1 from '../assets/audio/hi-hat/hi-hat1.wav';
import hh2 from '../assets/audio/hi-hat/hi-hat2.wav';
import hh3 from '../assets/audio/hi-hat/hi-hat3.wav';
import snare1 from '../assets/audio/snare/snare1.wav';
import snare2 from '../assets/audio/snare/snare2.wav';
import crash1 from '../assets/audio/crash/crash1.wav';
import crash2 from '../assets/audio/crash/crash2.wav';
import ride1 from '../assets/audio/ride/ride1.wav';
import ride2 from '../assets/audio/ride/ride2.wav';
import ride3 from '../assets/audio/ride/ride3.wav';
import tom1 from '../assets/audio/tom/tom1.wav';
import tom2 from '../assets/audio/tom/tom2.wav';
import tom3 from '../assets/audio/tom/tom3.wav';

const useSounds = () => {
    const mySampler = useRef(null);

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

    const buttonsList = [
        {
            soundPlay: () => mySampler.current.triggerAttackRelease(["C4"], 4),
        },
        {
            soundPlay: () => mySampler.current.triggerAttackRelease(["C#4"], 4),
        },
        {
            soundPlay: () => mySampler.current.triggerAttackRelease(["D4"], 4),
        },
        {
            soundPlay: () => mySampler.current.triggerAttackRelease(["D#4"], 4),
        },
        {
            soundPlay: () => mySampler.current.triggerAttackRelease(["E4"], 4),
        },
        {
            soundPlay: () => mySampler.current.triggerAttackRelease(["F4"], 4),
        },
        {
            soundPlay: () => mySampler.current.triggerAttackRelease(["F#4"], 4),
        },
        {
            soundPlay: () => mySampler.current.triggerAttackRelease(["G4"], 4),
        },
        {
            soundPlay: () => mySampler.current.triggerAttackRelease(["G#4"], 4),
        },
        {
            soundPlay: () => mySampler.current.triggerAttackRelease(["A4"], 4),
        },
        {
            soundPlay: () => mySampler.current.triggerAttackRelease(["A#4"], 4),
        },
        {
            soundPlay: () => mySampler.current.triggerAttackRelease(["B4"], 4),
        },
        {
            soundPlay: () => mySampler.current.triggerAttackRelease(["C5"], 4),
        },
        {
            soundPlay: () => mySampler.current.triggerAttackRelease(["C#5"], 4),
        },
        {
            soundPlay: () => mySampler.current.triggerAttackRelease(["D5"], 4),
        },
        {
            soundPlay: () => mySampler.current.triggerAttackRelease(["D#5"], 4),
        },
    ];

    return { buttonsList };
};

export default useSounds;
