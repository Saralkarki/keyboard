window.addEventListener("keydown", function(e) {
  // console.log(e.keyCode);
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  // console.log(audio);
  if (!audio) return; //stop the function from running alltogether
  audio.currentTime = 0; //rewinds to the start
  audio.play();
  key.classList.add('playing');
  // console.log(key)
 setTimeout(function(){ key.classList.remove('playing'); }, 70);
  
});
