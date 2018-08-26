const numbers = [];
let total = 0
for (counter = 0; counter <= 1000; counter++){
    numbers.push(counter);
    total= total + counter;
    console.log(total);
}
if (total===500500) {
    console.log('GoodJob!!!');
} else {
        console.log('Take a look to see if something is wrong')
    }