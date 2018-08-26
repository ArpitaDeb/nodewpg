const tripExpenses = [225, 229, 110];
let hotel = tripExpenses[0];
let tripExpense = tripExpenses[1];
let meals = tripExpenses[2];
const budget = tripExpenses.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
});

console.log('hotel:' , hotel , 'trip:' , tripExpense , 'meals:' , meals);
console.log('total budget:' , budget);