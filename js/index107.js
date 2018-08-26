let biggerNumber = function(firstNumber , secondNumber) {
  
    if (firstNumber > secondNumber) {
        console.log('number '+ firstNumber +' is bigger than '+ secondNumber +' !!')
    } else if (firstNumber === secondNumber) {
        console.log('both numbers are equal');
    } else if (firstNumber < secondNumber) {
        console.log('error'); 
    }   else {
            console.log('error');
    }
    }
    
    biggerNumber(3, 5);
    biggerNumber(6, 3);
    biggerNumber(2, 2); 