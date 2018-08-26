window.onload = function () {
    console.log('loaded');
}
let body = document.querySelector('body');
let h1 = document.createElement ('h1');
let p = document.createElement ('p');

h1.innerText = 'Create Dynamic Content!!!';
p.innerText = 'this element was created using JavaScript';

body.appendChild(h1);
body.appendChild(p);

console.log(h1);
console.log(p);