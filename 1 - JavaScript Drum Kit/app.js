/* Functions */
const playAudio = (e) => {
   // get the proper audio
   const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);

   // get the key pressed
   const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

   // check if user hits wrong key
   if (!audio) return; // Stop function running

   // play the audio
   audio.currentTime = 0;
   audio.play();

   // Style the key
   key.classList.add("playing");
};

//--------
const removeTransition =function (e) {
   if (e.propertyName !== "transform") return; // Skip it if it's not a transform

   // remove the transition after it is done
   this.classList.remove("playing");
};

//-------
const playAudioByMouse = function (e) {
   const keyCode = this.getAttribute("data-key");
   const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
   audio.currentTime = 0;
   audio.play();
   const key = document.querySelector(`.key[data-key="${keyCode}"]`);
   key.classList.add("playing");
}

/* Add event when the key is transitioned (scale change) */
const keys = document.querySelectorAll('.key');

/* Add event when the key is pressed*/
window.addEventListener('keydown', playAudio)

/* Add event when the key is pressed by mouse */
keys.forEach((key) => {
   key.addEventListener('click', playAudioByMouse)
})

// Loop the keys and remove the transition after it is done
keys.forEach(key => {
   key.addEventListener('transitionend', removeTransition)
})