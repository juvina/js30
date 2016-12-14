function playSound(e){
  //uses ES6 template literals/strings
  //find associated audio tag by keyCode/data-key attributes
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  //find associated key div for visual effects
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

  //escape if no element associated with keyCode, else play sound.
  if(!audio){ return; } 
  //reset sound for repeated key presses
  audio.currentTime = 0;
  audio.play();
  key.classList.add('playing');
}

function removeTransition(e){
  if (e.propertyName !== 'transform'){return; }
  this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);