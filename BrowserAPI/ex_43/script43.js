window.onload = function () {
    console.log('loaded');

const form = document.querySelector ('form');
console.log(form.elements);
const action = (form.action); 
const encoding = (form.encoding); 
const method = (form.method); 
const name = (form.name);
console.log (action, encoding, method, name);
let divnew = document.createElement ('div');
divnew.textContent = (action + ',' + encoding + ',' + method + ',' + name)
console.log(divnew);
}
/*Crete a variable for each form property
Example define a action variable and assign the form action property
Show each form property value as div content*/