# travelman-game
This is a hangman-style game using the countries of the world as part of the game. 

As an avid traveler, the concept of this game came to me as a way to learn to recognize each country's flag around the world accurately. 

The game's concept is that the user will have a set number of attempts to figure out the country's name. The user will be given a picture of the country and blank spaces for the available letters. 
They win each time they get an answer right within the allotted number of guesses.
They lose if they don’t get it right within the allotted number of guesses. 
The only clue for any user will be a picture of the country on one side of the screen. 

Pseudocode 
// need game initialization state 
// need a game reset state gameReset (as an event listener)
// need a play button and a play again button - playButton, playAgainButton 
// need an objects array to hold all of the answers (countries) const countries = [name: Brazil, name: China, etc.]
// need a folder with a picture for each country, with each file labeled accordingly. 
// need a placeholder object or space where the user can type in answers
// need a handleGuess option for each attempted answer (this would be a function) 
// need an attemptCounter to count the number of attempts (this would be a function) 
// need to display a message when the user has guessed incorrectly (function) 
// need to display a message when the user has won (function)
// will start with 20-30 countries that are easy to spell and represent this game's MVP. 
// will need to use the DOM to post the picture associated with the word every time the game is played. 


Level-Up features (may be added later) 
The game will include beginner, intermediate, hard modes. A timer may be added for extra complexity. 
A beginner will offer a certain number of letters to the word 
Intermediate will offer fewer letters
The hard mode will offer no letters to the word. 
Super hard adds a timer.
As a gamification element, I want the user to be able to level up. Each corresponding country may be given a level or level based on every 5-10 correct answers. 
I’m thinking of adding lives to the game so that you can have three lives to continue the game. 
I will eventually add all ~193 country flags to the index. 
