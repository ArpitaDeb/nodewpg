window.onload = function () {
    console.log('loaded');
    const firstChild = document.querySelector('li');
    firstChild.setAttribute('class' , 'orange',);
    const secondChild = firstChild.nextElementSibling
    secondChild.setAttribute('class', 'orange');
    const thirdChild = secondChild.nextElementSibling
    thirdChild.setAttribute('class', 'orange');
    const fourthChild = thirdChild.nextElementSibling
    fourthChild.setAttribute('class', 'orange');
    const fifthChild = fourthChild.nextElementSibling
    fifthChild.setAttribute('class', 'orange');
    fourthChild.previousElementSibling.setAttribute('class', 'red');
    secondChild.previousElementSibling.setAttribute('class', 'green');
  }