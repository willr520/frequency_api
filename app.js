const express = require('express');
const osc = require('oscillators');

const app = express();
const PORT = process.env.PORT || 3000;

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