window.onload = function () {
    console.log('loaded');
}
const button = document.getElementById('firstbutton');

const handleClickEvent = function() {
   window.alert('Oh... dont click me');
  }
  button.onclick = handleClickEvent;