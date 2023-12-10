const express = require('express');
const cors = require('cors');
const osc = require('oscillators');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

app.use(express.json());

app.listen(PORT, () => {
    console.log("Server Listening on PORT:", PORT);
});

app.get("/status", (request, response) => {
    const status = {
        "Status": "Running"
    };

    response.send(status);
});

app.get("/randomSound", (request, response) => {
    const inputString = request.query.inputString || ""; 
    const soundData = generateFrequencies(inputString);

    console.log("Generated Sound Data:", soundData);

    response.json({ soundData });
});

function generateFrequencies(inputString) {
    const frequencyMapping = {
        'A': 277.18 + " Hz",
        'B': 277.18 + " Hz",
        'C': 293.66 + " Hz",
        'D': 311.13 + " Hz",
        'E': 311.13 + " Hz",
        'F': 329.63 + " Hz",
        'G': 349.23 + " Hz",
        'H': 369.99 + " Hz",
        'I': 369.99 + " Hz",
        'J': 392.00 + " Hz",
        'K': 415.30 + " Hz",
        'L': 415.30 + " Hz",
        'M': 440.00 + " Hz",
        'N': 466.16 + " Hz",
        'O': 466.16 + " Hz",
        'P': 493.88 + " Hz",
        'Q': 523.25 + " Hz",
        'R': 554.37 + " Hz",
        'S': 554.37 + " Hz",
        'T': 587.33 + " Hz",
        'U': 622.25 + " Hz",
        'V': 622.25 + " Hz",
        'W': 659.26 + " Hz",
        'X': 698.46 + " Hz",
        'Y': 739.99 + " Hz",
        'Z': 739.99 + " Hz"
    };

    
    const uppercaseString = inputString.toUpperCase();


    const frequencies = Array.from(uppercaseString).map(char => {
        if (frequencyMapping[char]) {
            return frequencyMapping[char];
        } else {
            
            return 0;
        }
    });

    return frequencies;
}

app.get("/note-frequency", (request, response) => {
    const inputNote = request.query.inputNote || "";
    const noteFrequency = getNoteFrequency(inputNote);

    if (noteFrequency) {
        response.json({ noteFrequency });
    } else {
        response.status(400).json({ error: "Invalid note input" });
    }
});

function getNoteFrequency(note) {

    const noteMapping = {
        'C': 261.63,
        'C#': 277.18,
        'D': 293.66,
        'D#': 311.13,
        'E': 329.63,
        'F': 349.23,
        'F#': 369.99,
        'G': 392.00,
        'G#': 415.30,
        'A': 440.00,
        'A#': 466.16,
        'B': 493.88,
    };

    const match = note.match(/^([A-Ga-g#]+)([0-9]+)$/);

    if (match) {
        const noteName = match[1].toUpperCase();
        const octave = parseInt(match[2], 10);

        if (noteMapping[noteName]) {
            const frequency = noteMapping[noteName] * Math.pow(2, octave - 4);
            return frequency;
        }
    }

    return null;
}




//curl -X GET "http://localhost:3000/randomSound?inputString=Nathan"
//curl -X GET "https://frequency-generator.onrender.com/randomSound?inputString=Nathan"
//curl -X GET "https://frequency-generator.onrender.com/note-frequency?inputNote=C4"
