`python3 -m http.server`

# Presidential Debate

## Code Institute: Milestone Project 2

Amiresponsive photo

_Presidential Debate_ is a satirical memory game that pits the player against the computer, challenging them to repeat the increasingly complicated patterns with an amusing political twist. I wanted to develop my JavaScript skills by designing a "Bop-It" program and, after watching the first presidential debate between Joe Biden and Donald Trump, thought a fun variation on the classic game would be to replace the standard "Bop-It" noises with soundbites of the two candidates shouting at each other.

This was the second of four Milestone Projects required to pass the Full Stack Web Development Program at _Code Institute_. The main requirements were to build an interactive front-end site which responds to the users' actions using HTML, CSS, JavaScript and JQuery.

Click [here](https://github.com/zoet24/presidential-debate) to view the Github repository for the project, and click [here](https://zoet24.github.io/presidential-debate/) to view the live website.

## Table of Contents

- [UX Design](#ux-design)
    - [Design Process](#design-process)
        - [Strategy Plane](#strategy-plane) - done
        - [Scope Plane](#scope-plane) - done
        - [Structure Plane](#structure-plane) - done
        - [Skeleton Plane](#skeleton-plane) - needs Balsamiq pics
        - [Surface Plane](#surface-plane) - done
    - [Features](#features) - done
        - [Existing features](#existing-features) - done
            - [Home](#home) - done
            - [Game](#game) - done
            - [Tutorial](#tutorial) - done
        - [Features left to implement](#features-left-to-implement) - done
- [Technologies Used](#technologies-used)
    - [Languages and frameworks](#languages-and-frameworks)
    - [Additional tools used](#additional-tools-used)
- [Git Commit Messages](#git-commit-messages)
- [Testing](#testing)
    - [Testing user stories](#testing-user-stories)
        - [Testing - Project stakeholder](#testing---project-stakeholder)
        - [Testing - New users](#testing---new-users)
        - [Testing - Returning users](#testing---returning-users)
    - [Validating the code](#validating-the-code)
        - [HTML](#html)
        - [CSS](#css)
        - [JS](#js)
    - [Validating the responsiveness](#validating-the-responsiveness)
    - [Validating the accessibility](#validating-the-accessibility)
    - [Validating the functionality of all links](#validating-the-functionality-of-all-links)
- [Deployment](#deployment)
- [Cloning](#cloning)
- [Credits](#credits)

## UX Design
### Design Process
#### Strategy Plane 
I started the design process for _Presidential Debate_ by considering the goals of the site owner (me) and the site users (new players, returning players). I summarised these using the following user stories:

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

#### Scope Plane
After establishing the main aims of this project, I started looking for inspiration in similar website games that already existed. I found these previous _Code Institue_ MS2 projects particularly helpful, as they gave me a realistic idea of what I could achieve in a similar amount of time with a similar skill set:
- [Memory Game by shaamuus](https://shaamuus.github.io/milestone-project-2/)
- [TWUFO by matthewyong](https://matthewyong.github.io/twufo/index.html)
- [Bop It! by hschafer2017](https://hschafer2017.github.io/Stream-Two-Project/)

I also found these websites useful too:
- [Simon Says Tutorial by Dan Purdy](https://www.danpurdy.co.uk/tutorial/simon-says-game-in-jquery-tutorial/)
- [Bop It! by GreenSock](https://codepen.io/jkantner/pen/YVJVzW)

From my research and my user stories I defined the scope of my project by writing a list of “must-have” features and “nice-to-have” features that I wanted to include on my website.

_**"Must-haves"**_
1. The site must be aesthetically pleasing and have a consistent theme.
2. The site must be easy to navigate.
3. The game must load quickly and not lag.
4. The game must have at least 4 user inputs.
4. The game must give the player feedback when they succeed/fail.
5. The game must have clear instructions on how to play.
6. The game must keep track of the player's score.
7. The player must be able to input the difficulty of the game.
8. The player must be able to see their previous high score.
9. The player must be able to toggle the sound on/off.

_**"Nice-to-haves"**_
1. The game could have a leaderboard of previous scores.
2. The user could customise various aspects of the game.
3. The user could choose to play against the computer or a second player.

#### Structure Plane
Based on the features outlined in my scope and my research of other similar websites, I decided I wanted to keep it simple and include three pages on my website: ‘Home’, ‘Game’ and ‘Tutorial’. The ‘Home’ page welcomes the user to the game and allows them to navigate to the ‘Game’ and ‘Tutorial’ pages. The ‘Game’ page contains all of the elements of the game - difficulty input, high score, volume control - and allows the user to navigate back to the ‘Home’ page. The ‘Tutorial’ page contains concise instructions about how to play the game and allows the user to navigate back to the ‘Home’ page.

I added a ‘Settings’ page to my “nice-to-have” list - this would be a page where the user could customise various aspects of the game, but it was an unnecessary addition to include in the initial MVP.

#### Skeleton Plane
I used Balsamiq to develop wireframes (view them using Home, Game and Tutorial) of what I wanted my game to look like on mobile, tablet and desktop. I liked the idea of having a backdrop of Trump and Biden facing off on either side of the screen so used that to divide the screen in half and place the relevant information over the top of it. I kept my scope at the forefront of this design process to make sure that there was going to be a place to put all of my key features.

#### Surface Plane
Having sketched out what I wanted my website to look like, the main things I wanted to define on my surface plane were colour scheme, font and background image. As my game is American-themed, I kept it simple and stuck to a colour scheme of the standard CSS ‘red’, ‘white’ and ‘blue’ colours instead of trying to find a specific hex combination. I wanted something big, bold and cartoonish for the font to be in-keeping with the tongue-in-cheek theme of the game, so I went for Bowlby One SC. As the website contains minimal text I only used a single font throughout. For my background, I found an image of Donald Trump and Joe Biden facing off against each other on a simple red and blue backdrop. I used Paint to separate the image into two halves down the tear in the middle of the graphic, and then used Image Online to remove the white background.

![Donald Trump and Joe Biden](https://media3.s-nbcnews.com/j/newscms/2020_40/3415557/200928-fact-check-debate-main-cover-khu-_e25d50d2ca59323008ffa06e54aa1536.fit-400w.jpg)

### Features
#### Existing features
##### Home
- The title, start button and tutorial button are superimposed on the Trump and Biden backdrop which remains consistent across the website.
- All of the text has a "shake" effect applied to it, giving the page an energetic feel that is in-keeping with the fast-paced game. The "shake" effect also intensifies when the user hovers over the start and tutorial buttons, indicating that they can be clicked on.
- When the start button is clicked, the user hears a wrestling bell signalling the start of the "fight". The icons disappear one after another in time with each ring of the bell, giving a smooth transition to the 'Game' page.
##### Game
- Once the 'Game' page loads, the two halves of the backdrop slide to the side into "fighting" position.
- The start modal fills the screen and allows the user to pick their difficulty. Picking a harder difficulty decreases the time between inputs but increases the points you get for each correct input.
- After the user selects their difficulty, the computer has its first turn - it will generate a random sequence of three reactions from the six boxes available. A reaction from a box will play the associated audio clip, change the font colour and size, change the border width and "shake" the box to make it clear to the user what box has been triggered.
- After the first computer sequence has finished, the user has their first turn - each box they press will react in the same way as on the computer's turn.
- If the user's turn is successful the computer goes again, this time triggering four boxes. The sequence continues to increase by one until the user loses.
- If the user's turn is unsuccessful the wrestling bell will sound again and the correct box will react three times in a row to make it clear which one they should have pressed. The retry modal appears and allows the user to pick a new difficulty and try again.
- The game keeps track of the user's current score and high score in clear boxes at the bottom of the screen. The high score is recalled from the user's local storage, so the game will remember it for subsequent visits to the site.
- The user can return to the 'Home' page using the back button on the left of the screen.
- The user can also toggle the volume on/off using the speaker button on the right of the screen.
##### Tutorial
- The 'Tutorial' page consists of three screenshots of the game being played on a smartphone, with simple instructions below on how to play the game.
- The second screenshot has an animation of the computer playing a turn, followed by the user playing a turn.
- The user can flick between the screenshots using the carousel icons.
- The user can also return to the 'Home' page using the close button on the top right of the screen.
#### Features left to implement
The game in its current state meets all of the "must-have" criteria that I outlined in my scope. If I continued to develop it further, I would like to introduce the following features:
- A button that would allow users to share their high scores to their social medias.
- Background music that would increase in tempo as the user's score increases.
- A leaderboard of high scores of all users.
- Hotkey functionality to allow users to play with their keyboards.
- A 'Settings' page where users could customise aspects of the game such as number of boxes, different soundbites and different politicians.
- Multiplayer functionality so users could play against each other instead of the computer.

## Technologies used
### Languages and frameworks
- __HTML5:__ The language used to create the content and structure of my project.
- __CSS3:__ The language used to style the HTML5 elements to create the aesthetic of my game.
- __JavaScript:__ The language used to program my game and make aspects of the 'Home' and 'Tutorial' pages dynamic.
- __Bootstrap framework:__ I used the Bootstrap grid system to make my site responsive on different devices. I also used it for the carousel and modal components on the 'Tutorial' and 'Game' pages.
- __GitHub:__ I used GitHub to store my source code and repository.
- __GitHub Pages:__ I used GitHub Pages to deploy my project and make it viewable to others.
- __Gitpod:__ I used Gitpod's development environment to write the code for my project.

### Additional tools used
- __Amiresponsive:__ I used this to test the responsiveness of my website and to produce the title photo in my README document.
- __FontAwesome:__ I used FontAwesome's database for basic icons throughout my site.
- __Free Formatter:__ I used Freeformatter.com to format my code properly.
- __Google Developer Tools:__ I used this to test the responsiveness of my website by viewing my project on devices with different screen sizes, and to produce screenshots of the game for my 'Tutorial' page. I also used this to test different functions in my JavaScript code.
- __Google Fonts:__ I used one complementary font from Google Fonts for my project - Bowlby One SC.
- __Image Online:__ I used this to produce the graphics for my game.
- __Paint:__ I used this to produce the graphics for my game.
- __W3C CSS Validation Service:__ I used this to test to the validity of my CSS code.
- __W3C Markup Validation Service:__ I used this to test the validity of my HTML5 code.
- __WAVE - Web Accessibility Evaluation Tool:__ I used this to test the accessibility of my website.

## Git Commit Messages

## Testing
### Testing User Stories
#### Testing - Project stakeholder
#### Testing - New users
#### Testing - Returning users
### Validating the code
#### HTML
#### CSS
#### JS
#### Validating the responsiveness
I tested the accessibility of my website using WAVE - The Web Accessibility Evaluation Tool which highlighted the following errors:
- fieldset on game
- alt tags missing
- justify headings
#### Validating the accessibility
#### Validating the functionality of all links

## Deployment

I used GitHub Pages to deploy my website with the following steps:

1. I opened _Settings_ on my project repository in GitHub.
2. I then scrolled to _GitHub Pages_.
3. I selected the _master branch_ as my source.
4. This deployed my project on GitHub Pages and allowed me to share the live website.

More information on Github Pages can be found [here](https://pages.github.com/).

## Cloning

To develop my project further you can clone it to your local machine with the following steps:

1. Scroll to the top of my repository and click on the _Clone or download_ button.
2. Decide whether you want to clone the project using HTTPS or an SSH key.
  1. For HTTPS: click on the checklist icon to the right of the URL.
  2. For SSH key: first click on 'Use SSH' then click on the checklist icon to the right of the URL.
3. Open the _Terminal._
4. Change the current working directory to the destination of the cloned directory.
5. Type "git clone" and then paste the URL you copied earlier.
6. Press _Enter_ to create your local clone.

More information can be found [here](https://docs.github.com/en/enterprise/2.13/user/articles/cloning-a-repository).

## Credits
__Images:__

__Audio:__
- All noises from https://www.101soundboards.com/
__Acknowledgements:__
