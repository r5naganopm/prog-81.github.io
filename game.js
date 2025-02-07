const door = document.getElementById('door');
const key = document.getElementById('key');
const message = document.getElementById('message');
const hint = document.getElementById('hint');

let hasKey = false;
let hintShown = false;

key.addEventListener('click', () => {
  key.classList.add('hidden');
  hasKey = true;
  message.textContent = 'You found the key! Now unlock the door.';
  hint.classList.add('hidden');
});

door.addEventListener('click', () => {
  if (hasKey) {
    door.classList.remove('locked');
    door.classList.add('unlocked');
    message.textContent = 'Congratulations! You have escaped the room.';
  } else {
    message.textContent = 'The door is locked. Find the key first.';
    if (!hintShown) {
      hint.classList.remove('hidden');
      hintShown = true;
    }
  }
});
