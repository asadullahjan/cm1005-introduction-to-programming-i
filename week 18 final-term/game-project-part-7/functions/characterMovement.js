function characterMovement() {
  if (gameChar_world_x < 0) {
    gameChar_screen_x = width/2 -130;
  }

	// Logic to make the game character move or the background scroll.
  if (isLeft) {
    if (gameChar_screen_x > width * 0.3) {
      gameChar_screen_x -= 5;
    } else {
      scrollPos += 5;
      seceneryScrollPos += 4;
			cloudScrollPos +=2;
			sunScrollPos += 0.15;
    }
  }

  if (isRight) {
    if (gameChar_screen_x < width * 0.7) {
      gameChar_screen_x += 5;
    } else {
      scrollPos -= 5; // negative for moving against the background
      seceneryScrollPos -= 4;
			cloudScrollPos -=2;
      sunScrollPos -= 0.15;
    }
  }

  // Logic to make the game character rise and fall.
  isFalling = false;
  if (gameChar_screen_y < floorPos_y) {
    var isContact = false;
    for (let i = 0; i < platforms.length; i++) {
      if (platforms[i].checkContact()) {
        isContact = true;
        gameChar_screen_y = platforms[i].pos.y;
        charGravity = 0;
        charVelocity = 0;
        break;
      }
    }
    for (let i = 0; i < movingPlatforms.length; i++) {
      movingPlatforms[i].onTop = false;
      if (movingPlatforms[i].checkContact()) {
        isContact = true;
        gameChar_screen_y = movingPlatforms[i].pos.y;
        movingPlatforms[i].onTop = true;
        charGravity = 0;
        charVelocity = 0;
        break;
      }
    }
    if (isContact) {
      if (isJumping) {
        charVelocity += charJump;
        charGravity = 0.2;
        charVelocity += charGravity;
      }
    }
    if (!isContact) {
      isFalling = true;
      charGravity = 0.3;
    }
  }

  charVelocity += charGravity;
  gameChar_screen_y += charVelocity;

  if (gameChar_screen_y >= floorPos_y) {
    for (let i = 0; i < canyons.length; i++) {
      if (canyons[i].falling) {
        gameChar_screen_y += 3;
        isFalling = true;
        isJumping = false;
        isRight = false;
        isLeft = false;
        break;
      } else {
        isFalling = false;
        charVelocity = 0;
        charGravity = 0;
      }
      if (isJumping && !isFalling) {
        charVelocity += charJump;
      }
    }
  }
}
