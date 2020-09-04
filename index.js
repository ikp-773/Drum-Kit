var drumButton = document.querySelectorAll(".drum").length;

for (var i = 0; i < drumButton; i++) {
  document.querySelectorAll(".drum")[i].addEventListener('click', handleClick);
}


function handleClick() {
  var key = this.innerHTML;
  switch (key) {
    case 'w':
      var tom1 = new Audio('sounds/tom-1.mp3');
      tom1.play();
      break;
    case 'a':
      var tom2 = new Audio('sounds/tom-2.mp3');
      tom2.play();
      break;
    case 's':
      var tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
      break;
    case 'j':
      var snare = new Audio('sounds/snare.mp3');
      snare.play();
      break;
    case 'k':
      var tom1 = new Audio('sounds/tom-1.mp3');
      tom1.play();
      break;
    default:console.log(key);
  }
}
