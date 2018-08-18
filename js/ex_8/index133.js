const mutants = ['Professor X',
 'Cyclops',
  'Iceman',
   'Angel',
   'Magneto',
'Beast',
'Phoenix'];
mutants.forEach(function(mutants, index) {
    console.log('index', index); 
    console.log(mutants);
  });
  const mutantsNameInUpperCase = mutants.map(function(mutants) {
    return mutants.toUpperCase();
  });  
  console.log(mutantsNameInUpperCase) 
  console.log(mutants) 