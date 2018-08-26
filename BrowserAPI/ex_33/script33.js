window.onload = function () {
    console.log('loaded');
}
const button = document.querySelector('button');

button.addEventListener('click', function() {
   window.alert('You clicked an event listened element')
})