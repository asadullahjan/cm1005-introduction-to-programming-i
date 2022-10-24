# Game Name: Into the Nature
### Student Name: Asadullah Jan

## EXTENSIONS:

I have done all the suggested extensions:

1. **SOUND EFFECTS**

   Sound effects for actions such as jumping, falling in water, collectibles, etc. Added rain sound but it starts only when the character moves to the right or left and I used a loop to replay it again. It was annoying as it played on every frame until I found playMode('untilDone') so the rain sound does not overlap.

1. **PLATFORMS**
   
   Both moving and stationary platforms. I have used onTop variable in the movingPlatform constructor so that when my character is on top of it, its x property changes with the x property of movingPlatform and also speed is different for different movingPlatforms.

1. **ENEMIES**

   Mushrooms with spears moving right and left are good enemies considering my game is called Into the Nature :). It also have spear sound when the character contacts it and dies.

1. **THINGS I FOUND CHALLENGING**

   The features I found very difficult to implement were:
   
   1. Adding gravity to the character for realistic jump and fall. This was the hardest because it resulted in a lot bugs. The first was the player character not staying on platforms, the second bug was it no longer jumping from platforms, and the third was it not falling into canyons. I had to refactor my code a lot to fix these bugs.
   1. Parallax effect for different layers. It was very difficult to organize object into separate layers.


1. **FORMATED CODE AND ES6**

   1. Formated the code by adding different files for different functions and imported it to index.html by script tag. In addition to this, I have tried my best to make my code easy to read. The push() and pop() realy cleans the code and makes it error free.
   1. I used the .map() and arrow function to go through an array and used the new() function to make a new array of particular objects.I have done this in startGame().
