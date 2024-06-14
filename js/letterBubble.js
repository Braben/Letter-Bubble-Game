alert('Press Okay to start!');

// Select the container where the alphabets will appear
const gameContainer = document.getElementsByClassName('aaa')[0];

// Function to create and display a random alphabet
function printRandomAlphabet() {
    const alphabets = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const randomIndex = Math.floor(Math.random() * alphabets.length); // Select a random index
    const randomAlphabet = alphabets[randomIndex]; // Get the corresponding alphabet

    // Create a new div element to hold the alphabet
    const alphabetDiv = document.createElement('div');
    alphabetDiv.className = 'letter-box'; // Set the class for styling
    alphabetDiv.textContent = randomAlphabet; // Set the text content to the random alphabet
    gameContainer.appendChild(alphabetDiv); // Append the div to the container

    // Animate the newly created div
    animateLetter(alphabetDiv);
}

// Function to animate the random alphabet div
function animateLetter(alphabetDiv) {
    // Calculate random positions within the container bounds
    let top = Math.random() * (gameContainer.clientHeight - 80);
    let left = Math.random() * (gameContainer.clientWidth - 80);
    let duration = Math.random() * 5 + 2; // Duration between 2 and 7 seconds

    // Set the initial position and color
    alphabetDiv.style.top = `${top}px`;
    alphabetDiv.style.left = `${left}px`;
    alphabetDiv.style.color = 'yellow';

    // After 5 seconds, translate the div upwards
    setTimeout(() => {
        alphabetDiv.style.transform = `translateY(-${top}px)`;
    }, 4000);

    // Remove the div after the duration
    setTimeout(() => {
        alphabetDiv.remove();
    }, duration * 1000);
}

// Call the function every 5 seconds to generate new alphabets
setInterval(printRandomAlphabet, 5000);

// Sound elements for correct and incorrect key presses
const popSound = document.getElementById('popSound');
const oouchSound = document.getElementById('oouchSound');

// Score variables for player and computer
let playerResults = 0;
let computerResults = 0;

// Function to handle key presses
function keypress(e) {
    const keypressed = e.key.toUpperCase(); // Get the key pressed by the user
    const letterBox = document.querySelector('.letter-box'); // Select the current alphabet div

    // Check if the key pressed matches the alphabet in the div
    if (letterBox && keypressed === letterBox.textContent) {
        playerResults++; // Increment player score
        letterBox.textContent = '+1'; // Show +1 in the div
        letterBox.style.backgroundColor = 'green'; // Change background color to green
        popSound.play(); // Play the correct sound
        setTimeout(() => {
            letterBox.remove(); // Remove the div after a short delay
        }, 2);
    } else if (letterBox) {
        computerResults++; // Increment computer score
        letterBox.textContent = 'ouch'; // Show "oouch" in the div
        letterBox.style.backgroundColor = 'red'; // Change background color to red
        oouchSound.play(); // Play the incorrect sound
    }

    // Update the score displays
    document.getElementById('playerResults').textContent = `${playerResults}`;
    document.getElementById('computerResults').textContent = `${computerResults}`;

}

// Add the keypress event listener to the document
document.addEventListener('keyup', keypress);

 

