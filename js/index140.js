const mutants = ['Professor X', 'Cyclops', 'Iceman', 'Angel', 'Magneto', 'Beast', 'Pheonix', 'Logan', 'Gambit'];
const mutants2 = mutants.filter(function(mutant) {
    return mutant === 'Magneto';
});
console.log(mutants);
console.log(mutants2);