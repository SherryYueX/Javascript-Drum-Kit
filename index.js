

const audioNames = ["sounds/tom-1.mp3", "sounds/tom-2.mp3", "sounds/tom-3.mp3",
              "sounds/tom-4.mp3", "sounds/snare.mp3", "sounds/crash.mp3",
              "sounds/kick-bass.mp3"];

document.addEventListener("keydown", function(evt){
  playAudio(evt.key);
});

for(var i = 0; i < document.querySelectorAll(".drum").length; i++){
  document.querySelectorAll(".drum")[i].key = document.querySelectorAll(".drum")[i].innerHTML;
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    var keyChar = this.innerHTML;
    playAudio(keyChar);
  });
}
//
// function playAudio(evt) {
//   var audio = new Audio();
//   audio.src = evt.target.audioName;
//   audio.play();
// }

function playAudio(key){
  var audio = new Audio();
  if(key == "w") audio.src = audioNames[0];
  else if(key == "a") audio.src = audioNames[1];
  else if(key == "s") audio.src = audioNames[2];
  else if(key == "d") audio.src = audioNames[3];
  else if(key == "j") audio.src = audioNames[4];
  else if(key == "k") audio.src = audioNames[5];
  else if(key == "l") audio.src = audioNames[6];
  else return;
  buttonAnimation(key);
  audio.play()
}

function buttonAnimation(key){
  document.querySelector("." + key).classList.add("pressed");
  setTimeout(function(){document.querySelector("." + key).classList.remove("pressed");}, 100);

}
