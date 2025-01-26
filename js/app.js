
console.log("this is a test")

/* Psuedocode */

// need game initialization state 
// need a game reset state gameReset (as an event listener)
// need a play button and a play again button - playButton, playAgainButton 
// need an objects array to hold all of the answers (countries) const countries = [name: Brazil, name: China, etc.]
// need a function that randomly presents a country.
// need a folder with a picture for each country, with each file labeled accordingly. 
// need a placeholder object or space where the user can type in answers
// need a handleGuess option for each attempted answer (this would be a function) 
// need an attemptCounter to count the number of attempts (this would be a function) 
// need to display a message when the user has guessed incorrectly (function) 
// need to display a message when the user has won (function)
// will start with 20-30 countries that are easy to spell and represent this game's MVP. 
// will need to use the DOM to post the picture associated with the word every time the game is played. 


/*-------------- Constants -------------*/


const maxGuesses = 5;

const countryFlagFolder = [
    './assets/Mexico.jpg',
    './assets/India.jpg',
    './assets/Canada.jpg',
    './assets/China.jpg',
    './assets/Italy.jpg',
    './assets/United-States.jpg',
]

/*---------- Variables (state) ---------*/

let win;
let lose;
let gameOver;
let outOfAttempts;

/*----- Cached Element References  -----*/

/* Buttons */
const playButtonElement = document.getElementById("play")
const resetButtonElement = document.getElementById("restart")

/* Inputs & Displays */
const playerEntryEl = document.getElementById("player-entry")
const flagDisplayEl = document.getElementById('flag-display');
const messageEl = document.querySelector("#message")

/* Flag Images */
const flags = document.getElementById('flag-container');
// const flagMexicoLabel = Mexico.alt;


/*-------------- Functions -------------*/

const render = () => {
    playerEntryEl.value = ""
    if (gameOver === true) {
        resetButtonElement.classList.remove('hidden')
        // flags.remove('hidden')
    }
}

const init = () => {
    playerEntryEl.value = "";
    resetButtonElement.classList.remove('hidden')
    gameOver = false;
    render()
    console.log("init function is working")
}

init()

const playButtonClick = () => {
    playerEntryEl.value = "";
    getRandomFlag()
    render()
    console.log("play button is working")
}


const checkGameOver = () => {
    for (let i = 0; i < playerEntryEl.length; i++) {
        if (i !== "" && playerEntryEl === flagMexicoLabel.stringSeparator)
            gameOver = false
        // } else {
        //     resetButtonElement.classList.remove('hidden') 
    }
}

const stringSeparator = (playerEntryEl) => {
    return playerEntryEl.textContent.split('');
    console.log(stringSeparator)
}

const spelledOutCountry = playerEntryEl;
const answer = stringSeparator(spelledOutCountry);
console.log(answer);

const getRandomFlag = () => {
    const randomFlagIndex = Math.floor(Math.random() * countryFlagFolder.length);
    const randomFlagImage = countryFlagFolder[randomFlagIndex];
    const flag = document.createElement('img');
    flag.src = randomFlagImage;

    flags.innerHTML = ''; // Clear previous image, if any
    flags.appendChild(imgElement);
    console.log(getRandomFlag)
}

const handleGuess = () => {
    if(playerEntryEl === "Mexico")
        return "Correct"
}

/*----------- Event Listeners ----------*/
playButtonElement.addEventListener('click', playButtonClick)

resetButtonElement.addEventListener('click', init)