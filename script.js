const bug = document.getElementById('bug');
const game = document.querySelector('.game');

let bugX = game.clientWidth / 2;
let bugY = game.clientHeight / 2;
let bugRotation = 0; // Initialize rotation angle
const bugSpeed = 10;

// Update bug's position and rotation on the screen
function updateBug() {
  bug.style.left = bugX + 'px';
  bug.style.top = bugY + 'px';
  bug.style.transform = `rotate(${bugRotation}deg)`; // Apply rotation
}

// Event listener for arrow key presses
document.addEventListener('keydown', (event) => {
  switch (event.key) {
    case 'ArrowUp':
      bugY = Math.max(bugY - bugSpeed, 0);
      break;
    case 'ArrowDown':
      bugY = Math.min(bugY + bugSpeed, game.clientHeight - bug.clientHeight);
      break;
    case 'ArrowLeft':
      bugX = Math.max(bugX - bugSpeed, 0);
      break;
    case 'ArrowRight':
      bugX = Math.min(bugX + bugSpeed, game.clientWidth - bug.clientWidth);
      break;
    case 'r': // Press 'r' key to rotate bug by 90 degrees
      bugRotation += 90;
      break;
  }

  updateBug();
});

// Initialize bug's position and rotation
updateBug();
