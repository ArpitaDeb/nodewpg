const text = 'Using the '; // Note the trailing space!  It's a common mistake to forget whitespace when using concat
const method = 'concat method';

// We get one string back as result with both strings concatenated
const message = text.concat(method);

console.log(message); // My mom name is Marta

console.log(text); // My mom name is

console.log(method); // Marta