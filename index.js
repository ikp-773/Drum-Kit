var drumButton = document.querySelectorAll(".drum").length;

for (var i = 0; i < drumButton; i++) {
  document.querySelectorAll(".drum")[i].addEventListener('click', handleClick);
}


function handleClick() {
  var key = this.innerHTMML;
  switch (key) {
    case 'w':
      var tom1 = new Audio('sounds/tom-1.mp3');
      tom1.play();
      break;
    default:

  }
}
