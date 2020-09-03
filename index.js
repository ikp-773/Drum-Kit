

var drumButton=document.querySelectorAll(".drum").length;


for(var i=0;i<drumButton;i++){
  document.querySelectorAll(".drum")[i].addEventListener('click',handleClick);
}

function handleClick() {
  new audio=Audio('sounds/tom-1.mp3');
}
