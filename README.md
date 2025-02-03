
![Travelman](https://github.com/user-attachments/assets/c578a1bd-927e-4320-87ba-bfdef66c337e)

# travelman-game
This trivia game is based on the countries of the world, with the only clue being a flag of each country. As an avid traveler, the concept of this game came to me as a way to learn to recognize each country's flag around the world accurately. 

Objective
You have 5 guesses total to identify as many flags as possible correctly. To win, successfully guess all the flags shown without exhausting your 5 guesses.

How to Play
To start, you must hit the "Play" button. Each round displays a flag on the right side of the screen. Type the full name of the country into the input field. Include a " - " for countries with two words. Click the Submit button to lock in your answer. If your guess is correct, you’ll see a "Correct!" message, and you'll be able to click "Next" to move on to the next flag. If your guess is incorrect, you’ll lose one of your 5 total guesses.

Accessibility
You can use the keyboard, the tab, and the enter button instead of a mouse to enter answers, submit answers, and move on to the next flag.


Game Deployment Link: https://jrodlm.github.io/travelman-game/ 

Pseudocode 
// need game initialization state 
// need a game reset state gameReset (as an event listener)
// need a play button and a play again button - playButton, playAgainButton 
// need an objects array to hold all of the answers (countries) const countries = [name: Brazil, name: China, etc.]
// need a folder with a picture for each country, with each file labeled accordingly. 
// need a placeholder object or space where the user can type in answers
// need a handleGuess option for each attempted answer (this would be a function) 
// need an guessesRemaining to count the number of attempts (this would be a function) 
// need to display a message when the user has guessed incorrectly (function) 
// need to display a message when the user has won (function)
// will start with 20-30 countries that are easy to spell and represent this game's MVP. 
// will need to use the DOM to post the picture associated with the word every time the game is played. 


Technologies used: HTML, CSS, and JavaScript. 

High Level Roadmap 
Level-Up features (may be added later) 
The game will include beginner, intermediate, hard modes. A timer may be added for extra complexity. 
Super hard adds a timer.
As a gamification element, I want the user to be able to level up. Each corresponding country may be given a level or level based on every 5-10 correct answers. 
I’m thinking of adding lives to the game so that you can have three lives to continue the game. 
I will eventually add all ~193 country flags to the index. 
