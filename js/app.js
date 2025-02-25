
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

const flagObject = [
    {
        flagFile: './assets/Mexico.jpg',
        flagName: "Mexico",
        alt: "Mexico Flag",
    },

    {
        flagFile: './assets/India.jpg',
        flagName: "India",
        alt: "India Flag",
    },

    {
        flagFile: './assets/Canada.jpg',
        flagName: "Canada",
        alt: "Canada Flag",
    },

    {
        flagFile: './assets/China.jpg',
        flagName: "China",
        alt: "China Flag",
    },

    {
        flagFile: './assets/Italy.jpg',
        flagName: "Italy",
        alt: "Italy Flag",
    },

    {
        flagFile: './assets/United-States.jpg',
        flagName: "United-States",
        alt: "United States Flag",
    },

    {
        flagFile: './assets/Brazil.jpg',
        flagName: "Brazil",
        alt: "Brazil Flag",
    },

    {
        flagFile: './assets/France.jpg',
        flagName: "France",
        alt: "France Flag",
    },

    {
        flagFile: './assets/Great-Britain.jpg',
        flagName: "Great-Britain",
        alt: "Great Britain Flag",
    },

    {
        flagFile: './assets/Nigeria.jpg',
        flagName: "Nigeria",
        alt: "Nigeria Flag",
    },

    {
        flagFile: './assets/Ghana.jpg',
        flagName: "Ghana",
        alt: "Ghana Flag",
    },

    {
        flagFile: './assets/Greece.jpg',
        flagName: "Greece",
        alt: "Greece Flag",
    },

    {
        flagFile: './assets/Jamaica.jpg',
        flagName: "Jamaica",
        alt: "Jamaica Flag",
    },
]

const state = {
    score: 0,
}
/*---------- Variables (state) ---------*/

let win;
let lose;
let score;
let gameOver;
let outOfAttempts;
let currentFlagIndex;

const maxGuesses = 5;
let guessesRemaining = maxGuesses;

/*----- Cached Element References  -----*/

/* Buttons */
const playButtonElement = document.getElementById("play")
const playAgainButtonElement = document.getElementById("restart")
const submitButtonElement = document.getElementById("submit")
const nextButtonElement = document.getElementById("next")

/* Inputs & Displays */
const playerEntryEl = document.getElementById("player-entry")
const messageEl = document.querySelector("#message")
const scoreDisplayEl = document.getElementById('score-display')
const guessesLeftEl = document.getElementById('guess-display')

/* Images */
const flagContainer = document.getElementById('flag-container');
const flagImage = document.getElementById('flag-image')
const travelmanImage = document.createElement("travelman-image")


/*-------------- Functions -------------*/
const render = () => {
    playerEntryEl.value = ""
    scoreDisplayEl.textContent = state.score
    guessesLeftEl.textContent = `Guesses Left: ${guessesRemaining}`
}

const init = () => {
    state.score = 0;
    playerEntryEl.disabled = true
    submitButtonElement.disabled = true
    nextButtonElement.style.visibility = 'hidden'
    playAgainButtonElement.style.visibility = 'hidden'
    flagImage.src = "./assets/Travelman.png"
    render()
}

const randomFlagIndex = () => {
    let flagIndex = Math.floor(Math.random() * flagObject.length);
    const src = flagObject[flagIndex].flagFile;
    flagImage.src = src
    currentFlagIndex = flagIndex
    return flagIndex
}

currentFlagIndex = randomFlagIndex()

const nextButtonClick = () => {
    currentFlagIndex = randomFlagIndex()
    submitButtonElement.disabled = false
}

const playButtonClick = () => {
    playerEntryEl.disabled = false
    playerEntryEl.value = "";
    messageEl.textContent = "";
    submitButtonElement.disabled = false
    nextButtonElement.style.visibility = 'hidden'
    randomFlagIndex()
    render()
}

const checkGameOver = () => {
    if (guessesRemaining === 0) {
        messageEl.textContent = "You Lose - Game Over."
        submitButtonElement.disabled = true
        playerEntryEl.disabled = true
        playButtonElement.disabled = true
        playAgainButtonElement.style.visibility = 'visible'
    }
}

const checkAnswer = () => {
    const correctFlag = flagObject[currentFlagIndex].flagName.toLowerCase()
    const lowerCaseInput = playerEntryEl.value.toLowerCase()
    if (lowerCaseInput === correctFlag) {
        state.score += 100;
        messageEl.textContent = "Correct!"
        messageEl.style.color = "#1A873B";
        nextButtonElement.style.visibility = 'visible'
        submitButtonElement.style.visiblity = 'hidden'
        submitButtonElement.disabled = true
    } else if (lowerCaseInput !== correctFlag) {
        messageEl.textContent = "Incorrect, try again!"
        messageEl.style.color = "#CC0000";
        nextButtonElement.style.visibility = 'hidden'
        guessesLeftEl.textContent = `Guesses Left: ${guessesRemaining -= 1}`
        checkGameOver()
    }
    render()
}

const submitButtonClick = () => {
    checkAnswer()
}


const playAgainButtonClick = () => {
    messageEl.textContent = "";
    submitButtonElement.disabled = false
    playerEntryEl.disabled = false
    scoreDisplayEl.style.visibility = 'visible'
    guessesLeftEl.style.visibility = 'visible'
    nextButtonElement.style.visibility = 'hidden'
    randomFlagIndex()
    render()
}

/*----------- Event Listeners ----------*/
playButtonElement.addEventListener('click', playButtonClick)

playAgainButtonElement.addEventListener('click', playAgainButtonClick)

submitButtonElement.addEventListener('click', submitButtonClick)

nextButtonElement.addEventListener('click', nextButtonClick)

init()