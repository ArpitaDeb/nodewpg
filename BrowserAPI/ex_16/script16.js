window.onload = function () {
    console.log('loaded');
   }
   const element = document.querySelector('a');
   const className = element.className;
   
   console.log(className);
   console.log(element.getAttribute('class'));