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
    - [Features](#features)
        - [Existing features](#existing-features)
            - [Consistent features](#consistent-features)
            - [Home](#home)
            - [Tutorial](#tutorial)
            - [Game](#game)
        - [Features left to implement](#features-left-to-implement)
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
##### Consistent features
##### Home
##### Tutorial
##### Game
#### Features left to implement
- Share highscore/game on social media
- Choose sounds/politicians to fight

## Technologies used
### Languages and frameworks
### Additional tools used

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