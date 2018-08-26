const firstPerson = ['Michelle' + 'Zehner' + 'Reindeer Road' + 32];
const secondPerson = ['Chris' , 'Zehner', 'Reindeer Road', 35];
console.log(firstPerson)
const result = firstPerson.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
  });
const result2 = secondPerson.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
  });
  if (firstPerson == 'string') {
    console.log(result);
} else {
    console.log('Please enter your details');
}
if (secondPerson == 'string') {
    console.log(result2);
} else {
    console.log('Please enter your details');
}