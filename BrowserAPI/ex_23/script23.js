window.onload = function () {
    console.log('loaded');
}
const ul = document.querySelector('ul');
console.log(ul.innerHTML);
 ul.innerHTML = '<li>Item 1</li><li>Item 2</li><li>Item 3</li><li>Item 4</li><li>Item 5</li>'

 const li = document.querySelectorAll('li');
 const children = li.children