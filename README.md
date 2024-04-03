# Pokémon Game - Best out of 5 
This is a simple Pokémon game implementation where the player competes against the computer in a best out of 3 rounds match. The game allows the player to choose from three Pokémon types: Charmander, Squirtle, and Bulbasaur. The computer randomly selects its choice, and the winner of each round is determined based on the classic Pokémon type interactions.

## Features

* User can click on buttons representing different Pokémon choices.
* Computer randomly selects its choice for each round.
* Results of each round are displayed along with the player and computer choices.
* The game keeps track of the player's and computer's scores.
* The game follows a best out of 5 rounds structure.
* After 5 rounds, the overall winner (or a tie) is determined and displayed.

## Usage
1. Clone this repository to your local machine.
2. Open the index.html file in a web browser to play the game.
3. Click on the Pokémon buttons to make your choices.
4. The game will display the results of each round and update the scores.
5. After 3 rounds, the overall winner will be declared.

## Code Explanation
The game is built using HTML, CSS, and JavaScript. The JavaScript code handles user interactions, computer choices, result determination, and score tracking. The key components of the code include:

* #### Event Listerners:
Each Pokémon button has an event listener that triggers when clicked. It captures the player's choice and initiates the round.
* #### Computer Turn:
The computer's choice is randomly generated from the available options (Charmander, Squirtle, Bulbasaur).
* #### Result Determination: 
 Based on the classic Pokémon type interactions, the winner of each round is determined and the result is displayed.
* #### Score Tracking: 
The player's and computer's scores are updated according to the round results.
* #### Best Out of 5 Logic: 
The game follows a best out of 5 rounds structure. After 5 rounds, the overall winner is determined based on the scores.

# Image Exampel of the game. 
![7ece33c3-b8e1-4801-a866-e78d0559e769](https://github.com/PerparimShabani/Project-2/assets/132937791/93cf8f17-89d1-435c-8af0-5276cfbc504f)

## Validator Testing 
* Html
  - No errors were returned when passing through the official W3C validator
* CSS
  - No errors were found when passing through the official (Jigsaw) validator
* JavaScript
  - No errors were found when passing through the official Jshint validator
    - The following metric was returned:
    - There are 5 functions in this file.
    - Function with the largest signature take 1 arguments, while the median is 0.
    - Largest function has 18 statements in it, while the median is 3.
    - The most complex function has a cyclomatic complexity value of 8 while the median is 1.
    - Image below 
![image](https://github.com/PerparimShabani/Project-2/assets/132937791/8a46e7d5-5ace-4fb1-84bc-d92bc1a7b6ea)


## Credits 
* Pokemon images: Images sourced from https://imgbin.com/free-png/pokemon-pixel
