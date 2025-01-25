
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

const state = {
    answerSpace: "",
}
const maxGuesses = 5;

const countryFlagFolder = [
    'assets/Mexico.jpg',
]

/*---------- Variables (state) ---------*/

let lose;
let gameOver;


/*----- Cached Element References  -----*/
const playButtonElement = document.getElementById("play")
const playerEntryEl = document.getElementById("player-entry")
const resetButtonElement = document.getElementById("restart")
const flagContainerEl = document.getElementById('flag-container');


/*-------------- Functions -------------*/

const init = () => {  
    state.answerSpace = ""
    resetButtonElement.classList.add('hidden')
    gameOver = false;
    render()
}

const playButtonClick = () => {
    state.answerSpace = "";
    render()
}

const render = () => {
    playerEntryEl.textContent = ""

    if (gameOver === true) {
        resetButtonElement.classList.remove('hidden')
    }
}

const checkGameOver = () => {
    for (let i = 0; i < answer.length; i++) {
     if(i !== "") 
        gameOver = false
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


    container.innerHTML = ''; // Clear previous image, if any
    container.appendChild(imgElement);
    console.log(getRandomFlag)
}

/*----------- Event Listeners ----------*/


// playButtonElement.addEventListener('click', playButtonClick)

// resetButtonElement.addEventListener('click', init)