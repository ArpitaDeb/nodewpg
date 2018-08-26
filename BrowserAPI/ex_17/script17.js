window.onload = function () {
    console.log('loaded');
}
let color = window.prompt('Please choose and input one of the following colors: green, blue, or red');
if (color == 'green') {
    const element = document.querySelector('a');
    const classList = element.classList.add('green');
}
else if (color == 'blue') {
    const element = document.querySelector('a');
    const classList = element.classList.add('blue');
}
else if (color == 'red') {
    const element = document.querySelector('a');
    const classList = element.classList.add('red');
}
else {
    window.prompt('that is not a valid color');
    
}
<script>
  window.onload = function(){
   let colorchoice = window.prompt('Please choose & input one of the following colors: green, blue or red');
  const element = document.querySelector('a');
  element.classList.add(colorchoice)};
  if 
console.log('Avoid adding the class if the user inputs a color that\'s not an option');
</script>