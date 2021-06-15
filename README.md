Game design and analysis of Labyrinth game

1. What is the title of the game and the inspiration?
Ans: Labyrinth game, The inspiration is from the book Harry Potter and the goblet of fire.

2. What is the storyline of the game?
Ans: Four players enter the maze, with the aim to find the golden cup. If they find each other by chance in the game, there is no restriction to hurt or kill each other with the weapon they chose at the beginning of the game. The maze keeps expanding, and the      place of the golden cup keeps changing. The players cannot see beyond a small circle around them. Also, the maze contains a lot of      traps, riddles, etc. Players can respawn up to 3 times, each time in a different location.

3. What is the goal of the game?
Ans: To find the golden cup. Once any player reaches it, the game will be finished.

4. What are the different characters/elements of the game?
Ans: 
Canvas : The size will be equal to the window’s size. 
1. Golden Cup :           The cup will be a rectangular sprite in the centre of the maze. When the player touches the golden cup ,the game is over and the player wins.
 2. Game Objects:
	a. Trap weed:           An irregular shape, like food, but is actually a trap on touching which one life of the player will be gone and the player have to respawn and the trap weed will burst and a gruff sound will play. Colour will be a slightly darker shade of green than food.
	b. Riddles : Options will be provided, a small form will be displayed. On clicking correct answer, player will go ahead and the riddle will be destroyed(for the player only). The riddles will be yes or no as well as related to harry potter details. The riddles will be chosen randomly from of 5 riddles in a json file. 
			1.  Start with a person who collects information stealthily. Add it to the middle of middle and end of end. Add the word you say when you can’t find a word. What do you get?
	Ans: Spider.
			2. What is always in front of you but can’t be seen?
	Options: a. the future,   b. a chair in the dark, c. all of the above
	Correct answer : c.
			3. What goes up but never comes down?
Options: a. correct: your age, b. your height.
			4. What can you keep after giving to someone?
Options: a. correct:  your word, b. your pencil, you can always want it back
			5. What can’t talk but will reply when spoken to?
Options: a. your coded humanoid robot, b. correct: an echo.
	c. Regular obstacles like fire  , ditch            . Players will have to dodge them. 
         	d. Food: Green shaped       objects, keep appearing over the maze, at one time the max number of them present can be 20.

 3. Players: 4 players, each a different character with different weapons. The player has to choose the weapon at the beginning of                  the game.
        a. Weapons://write about weapons later
        b. Lives: The player will have only three lives, on exhausting them he/she will be out
     4. Maze : With actual walls and all. Pretty big.

5. What are the playing characters and non-playing characters of the game?
Ans : The player.
6. Explain the behaviour of each character during every stage of the game in detail.
Ans: Already explained in question 4.

7. What are the elements of skill?
Ans: The ability to answer the riddle and fight the opponent.

8. What are the elements of chance?
Ans: The kind of traps they face, which path they choose in the labyrinth.

9. How does the game create balance between the elements of skill and elements of chance?
Ans: By giving three lives.

10. How does the game provide feedback to the user throughout the duration of the game?
Ans: It displays a message if the other players are near, it also tells them when they reach the cup. The game is full screen.

11. What is the technology used to build the game?
12. What is the software used to develop the game?
13. Which javascript libraries have been used to develop the game, like
	1. p5.js
	2. p5.min.js
	3. p5.dom.js
	4. p5.dom.min.js
	5. p5.sound.js
	6. p5.sound.min.js
	7. p5.play.js
	8. matter.js
	9. firebase-app.js
	10. firebase-database.js

Class Wise Goals:

Class - 45
Self-Designed Game - 1

GOALS:
      1. To create a random maze.
      2. To make sure the walls of the cells of the maze are sprites.
    
* This is going to be a single player game, so database will not be needed.

Class - 46
Self-Designed Game - 2
GOALS:
      1. To create a form when game state is zero and display it instead of canvas.
      2. To make sure the the player's name is stored in the program as soon as he/she 
         enters his/her name in the form and game state is updated.
      3. To write the function so that the player can choose their character.

Class - 47
Self-Designed Game - 3
GOALS:
        1. To make obstacles at random, and place them at proper random places in the maze.
        2. To make sure the game ends when the player hits an obstacle, and the player loses.
        3. When the player reaches the end, the game should end and the player wins the game.

Class - 48
Self-Designed Game - 4
GOALS:
        1. To provide the player with some power-ups, which may be used to destroy obstacles.
        2. Add quiz games.


