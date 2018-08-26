const text = 'Game of Thrones';
const firstchar = text.charAt(0);
const secondchar = text.charAt(5);
const thirdchar = text.charAt(8);
const result = firstchar.concat(secondchar, thirdchar);
const message = `the result is: ${result}`;
console.log(message , result.toUpperCase());
