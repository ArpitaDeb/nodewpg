const text = 'HELLO';
const char1 = text.charAt (4);
const char2 = text.charAt (3);
const char3 = text.charAt (2);
const char4 = text.charAt (1);
const char5 = text.charAt (0);
const result = (text.concat(char1, char2, char3, char4, char5));
const message = 'the final result is:';
console.log(message , result.toLowerCase());