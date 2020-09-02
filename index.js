

document.querySelectorAll('button').forEach(function(item) {
  item.addEventListener("click", handleClick)
})


function handleClick() {
  alert('i got clicked');
}
