window.onload = function () {
    console.log('loaded');

const ul = document.querySelector('ul');  
const children = ul.children;
console.log(children);

const secondChild = children[1];
secondChild.setAttribute('class' , 'green',);

const fourthChild = children[3];
fourthChild.setAttribute('class' , 'red');

const parent = ul.parentElement;
parent.setAttribute('class' , 'orange');
}
