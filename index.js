

var drumButton=document.querySelectorAll(".drum").length;
if(var i=0;i<drumButton;i++){
  document.querySelectorAll(".drum")[i].addEventListener('click',handleClick);
}



function handleClick() {
  alert('i got clicked');
}
