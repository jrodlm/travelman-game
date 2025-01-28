
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

const countryFlagArray = [
    './assets/Mexico.jpg',
    './assets/India.jpg',
    './assets/Canada.jpg',
    './assets/China.jpg',
    './assets/Italy.jpg',
    './assets/United-States.jpg',
]

const flagObject = [
    {
        flagFile: './assets/Mexico.jpg',
        flagName: "Mexico", 
    },

    {   
        flagFile: './assets/India.jpg',
        flagName: "India",
    },

    {   
        flagFile: './assets/Canada.jpg',
        flagName: "Canada",
    },

    {   
        flagFile: './assets/China.jpg',
        flagName: "China",
    },
    
    {   
        flagFile: './assets/Italy.jpg',
        flagName: "Italy",
    },
    
    {   
        flagFile: './assets/United-States.jpg',
        flagName: "United-States", 
    },

    {   
        flagFile: './assets/Brazil.jpg',
        flagName: "Brazil", 
    },

    {   
        flagFile: './assets/France.jpg',
        flagName: "France", 
    },

    {   
        flagFile: './assets/Great-Britain.jpg',
        flagName: "Great-Britain", 
    },

    {   
        flagFile: './assets/Nigeria.jpg',
        flagName: "Nigeria", 
    },

    {   
        flagFile: './assets/Ghana.jpg',
        flagName: "Ghana", 
    },

    {   
        flagFile: './assets/Greece.jpg',
        flagName: "Greece", 
    },

    {   
        flagFile: './assets/Jamaica.jpg',
        flagName: "Jamaica", 
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

/*----- Cached Element References  -----*/

/* Buttons */
const playButtonElement = document.getElementById("play")
const playAgainButtonElement = document.getElementById("restart")
const submitButtonElement = document.getElementById("submit")
const nextButtonElement = document.getElementById("next")

/* Inputs & Displays */
const playerEntryEl = document.getElementById("player-entry")
const flagDisplayEl = document.getElementById('flag-display');
const messageEl = document.querySelector("#message")
const scoreDisplayEl = document.getElementById('score-display')

/* Images */
const flags = document.getElementById('flag-container');
const flagImage = document.getElementById('flag-image')
const travelmanImage = document.getElementById("travelman-image")
// const flagMexicoLabel = Mexico.alt;


/*-------------- Functions -------------*/

const render = () => {
    playerEntryEl.value = ""
    scoreDisplayEl.textContent = state.score
    // if (gameOver === true) {
    //     playAgainButtonElement.classList.remove('hidden')
    //     // flags.remove('hidden')
    // }
}

// let flagObjectMap = (flagObject.map(flagName, flagImagefile) => {


// })

// const getRandomFlag = () => {
//     const randomFlagIndex = Math.floor(Math.random() * countryFlagArray.length);
//     const src = countryFlagArray[randomFlagIndex];
//     flagImage.src = src
// }

const randomFlagIndex = () => {
    let flagIndex = Math.floor(Math.random() * flagObject.length);
    console.dir(flagIndex)
    const src = flagObject[flagIndex].flagFile;
    flagImage.src = src
    return flagIndex
    }

// const getRandomFlag = () => {
//     randomFlagIndex()
//     console.log(randomFlagIndex)

// }


currentFlagIndex = randomFlagIndex() 
console.log(currentFlagIndex)

const changeFlag = () => {
    const flag = document.querySelector("#countryFlagArray");
    // flag.src = getRandomFlag();
}

const nextButtonClick = () => {
    randomFlagIndex()
}

const playButtonClick = () => {
    playerEntryEl.value = "";
    messageEl.textContent = "";
    nextButtonElement.style.visibility = 'hidden'
    randomFlagIndex()
    render()
    console.log("play button is working")
}

const init = () => {
    // playButtonClick()
    gameOver = false;
    render()
    console.log("init function is working")
}

init()




const checkGameOver = () => {
    for (let i = 0; i < playerEntryEl.length; i++) {
        if (i !== "" && playerEntryEl === flagMexicoLabel.stringSeparator)
            gameOver = false
        // } else {
        //     resetButtonElement.classList.remove('hidden') 
    }
}

// const stringSeparator = (playerEntryEl) => {
//     return playerEntryEl.textContent.split('');
//     console.log(stringSeparator)
// }

// const spelledOutCountry = playerEntryEl;
// const answer = stringSeparator(spelledOutCountry);
// console.log(answer);



const submitButtonClick = () => {
    checkAnswer()
    render()
}

// const handleNextFlag = () => {
//     currentFlagIndex = currentFlagIndex+1
// }

const checkAnswer = () => {
    const correctFlag = flagObject[currentFlagIndex].flagName.toLowerCase()
    console.dir(playerEntryEl)
    console.log(correctFlag)
    const lowerCaseInput = playerEntryEl.value.toLowerCase()
    console.log(lowerCaseInput)
    console.log(currentFlagIndex)
    if(lowerCaseInput === correctFlag) {
        state.score += 100;
        messageEl.textContent = "Correct!" 
        messageEl.style.color = "#1A873B";
        nextButtonElement.style.visibility = 'visible'
    } else if(lowerCaseInput !== correctFlag) { 
        messageEl.textContent = "Incorrect, try again!"  
        messageEl.style.color = "#CC0000";
        nextButtonElement.style.visibility = 'hidden'
    }
    // if(lowerInput = [:-4])
}

// const updateMessage = () => {
//     if (playerEntryEl === "Mexico") {
//         messageEl.textContent = `Correct!`
//     } else if (playerEntryEl !== "Mexico") {
//         messageEl.textContent = "Incorrect! Try Again!"
//     }
// }



/*----------- Event Listeners ----------*/
playButtonElement.addEventListener('click', playButtonClick)

playAgainButtonElement.addEventListener('click', init)

submitButtonElement.addEventListener('click', submitButtonClick)

nextButtonElement.addEventListener('click', nextButtonClick)