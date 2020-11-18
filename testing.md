# Testing

## Table of Contents

- [Testing During Development](#testing-during-development)
- [Code Validation](#code-validation)
    - [HTML](#html)
    - [CSS](#css)
    - [JavaScript and JQuery](#javascript-and-jquery)
    - [Responsiveness](#responsiveness)
    - [Accessibility](#accessibility)
    - [Performance](#performance)
- [Testing User Stories](#testing-user-stories)

Click [here](README.md) to return to the main document.

## Testing During Development
My main method of testing my JavaScript code throughout the development process was using `console.log` within each function to report on what variables were being generated at each stage of the game. I then used the Console on the Google Developers tool to read the output and subsequently make changes to my code to fix any unpredictable behaviour. This helped to fix the following bugs:
- **93c71fd** _Bug fix: Remove level 1 win error -_ On the first level the user's turn would be successful regardless of the turn input. Initially the `newGame()` function set `game.count = 1` but I realised through testing that it needed to be set to 0.
- **a705a14** _Bug fix: difficulty input now works consistently -_ When I first implemented the difficulty menu, I found that `difficulty: 1` in the game variables regardless of the user input at the start of the game. After researching the issue online, I tried wrapping the _unordered list_ in a _form_ which solved the problem.
- **175c69b** _Bug fix: randSequence() no longer generates sequential equal values in compSequenceArr[] -_ If `game.next = (Math.floor(Math.random() * 6))` in `randSequence()` generated 2 identical values next to eachother in `compSequenceArr[]`, the audio files would overlap creating an unpleasant experience for the user. This was especially evident in the harder difficulties. I added
 ```
 while (game.next === game.prev) { // Sequential numbers can't be the same
 game.next = (Math.floor(Math.random() * 6));
 }
 ```
 to prevent sequential array values being the same, and also added the `text-pop` class into the box reactions to give the user some visual feedback from the game too.

## Code Validation
### HTML
I used the W3C Markup Validation Service to test the validity of my HTML. It flagged the use of alt tags on the carousel component on tutorial.html. I replaced these with the same description hidden within a span element with a sr-only class.
### CSS
I used the W3C CSS Validation Service to test the validity of my CSS. It didn't flag any issues.
### JavaScript and JQuery
I used JSHint to test the validity of my JavaScript and JQuery. It highlighted that I was missing semicolons at the end of my game variables definition and my onload function on game.js.
### Responsiveness
I used Google Developer tools to test the layout of my site on multiple device sizes, and also shared the deployed site with my family and friends for them to test on their devices too. I used their feedback to finetune the CSS and position all elements correctly.
### Accessibility
I used WAVE (The Web Accessibility Evaluation Tool) to test the accessibility of my site which highlighted the following errors:
- A missing _fieldset_ element that should wrap the _unordered list_ on game.html. I added this along with the _legend_
- alt tags missing
- justify lack of headings and page regions
### Performance
100% for accessibility
compressed pngs

## Testing User Stories
_**Site owner**_
1. As the site owner, I want the site users to enjoy playing the game so that the game becomes popular.
2. As the site owner, I want the website to be aesthetically pleasing to demonstrate my ability to code in HTML and CSS and to create a positive UX experience for the site users.
3. As the site owner, I want the game to function well to demonstrate my ability to code in JavaScript and JQuery and to create a positive UX experience for the site users.



_**Site users**_
1. As a site user, I want to enjoy playing the game.
2. As a site user, I want the game to load quickly and not lag so I am not distracted from playing the game.
3. As a site user, I want to receive feedback when I play the game correctly so I know what I've done right.
4. As a site user, I want to receive feedback when I play the game incorrectly so I know that I've made a mistake.
5. As a site user, I want to be able to turn the sound on and off depending on my surroundings.
6. As a new site user, I want the website to be easy to navigate so I can find the game and the instructions quickly.
7. As a new site user, I want clear instructions on how the game works so I can start playing quickly.
8. As a new site user, I want to be able to select an easy difficulty so I can get the hang of the game.
9. As a returning site user, I want to be able to select a harder difficulty so I can challenge myself and score more points.
10. As a returning site user, I want to be able to see my high score so I can try to beat it.
