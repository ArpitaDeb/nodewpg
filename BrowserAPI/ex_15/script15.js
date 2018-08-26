window.onload = function () {
    initiateMyCode();
}
function initiateMyCode() {
    alert("hello");
}

const mainElement = document.getElementById('important');
console.log(mainElement); 

const allElements = document.querySelectorAll('ul');
console.log(allElements);

const ul = document.querySelector('ul');
console.log(ul);

const blueElements = document.getElementsByClassName('blue');
console.log(blueElements);