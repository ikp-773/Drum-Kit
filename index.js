var drumButton = document.querySelectorAll(".drum").length;

for (var i = 0; i < drumButton; i++) {
  document.querySelectorAll(".drum")[i].addEventListener('click', handleClick);
}





function handleClick() {
  console.log(this.style.color = 'black');
}


 bdasbjabd


// var audio =new Audio('sounds/snare.mp3');
// audio.play();
