/*
Events allow us to run certain code at certain times.

One very common event is a button click.
*/


/*
Functions
A function is a block of code with a specific
purpose.

Variable
A value that can change as the program runs.
*/
let counter = 0; // reminder: to talk about scope (later)

// Create a 'synth' and connect to speakers. This will allow us to
// play our notes.
// More tone.js documentation, including how to change an
// instrument: https://github.com/Tonejs/Tone.js.
let synth = new Tone.Synth().toMaster();

function announceTheClick() {
    console.log('Test message');
}

function proclaim() {
    console.log('hey')
    // Attack and release together. How convenient!
    synth.triggerAttackRelease('C4', '8n'); // middle C, 1/8 note
}

/*
    1. When a key is pressed call a function.
    2. Depending on what key is pressed, play a sound.
*/

function maybePlay(keyPressed, keyTarget, notePlayed) {
    if (keyPressed === keyTarget) {
        synth.triggerAttackRelease(notePlayed, '8n');

        // also turn the box blue (make it 'active')
        let noteBox = document.querySelector('.' + keyPressed);
        // Add the 'active' class to noteBox
        noteBox.classList.add('active');

        // after 250ms, remove active class
        setTimeout(function () {
            noteBox.classList.remove('active');
        }, 250);
    }
}

let octave = 4;

/* When the page loads, start 'listening' */
window.addEventListener('load', function () {
    /* 
        When I click the button, console.log 
            1. select the <button> element
            2. store it in a variable called 'musicButton'
            3. listen for 'click' events on musicButton
            4. console.log when i hear one
    */
    let musicButton = document.querySelector('body');
    musicButton.addEventListener('keydown', function (event) {
        maybePlay(event.key, 'a', 'A' + (octave - 1));   // if i pressed 'a', play A3
        maybePlay(event.key, 's', 'B' + (octave - 1));
        maybePlay(event.key, 'd', 'C' + octave);
        maybePlay(event.key, 'f', 'D' + octave);
        maybePlay(event.key, 'g', 'E' + octave);
        maybePlay(event.key, 'h', 'F' + octave);
        maybePlay(event.key, 'j', 'G' + octave);

        if (event.key === 'ArrowUp') {
            octave = octave + 1;
        }

        if (event.key === 'ArrowDown') {
            octave = octave - 1;
        }
    });
});



announceTheClick();