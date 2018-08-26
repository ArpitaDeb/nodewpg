const weekdayNumber = 9;
let message = null;

switch (weekdayNumber) {
    case 1 :
        message = 'Today is Monday';
        break;
    case 2 :
        message = 'Today is Tuesday';
        break;
    case 3 :
        message = 'Today is Wednesday';
        break;
    case 4 :
        message = 'Today is Thursday';
        break;
    case 5 :
        message = 'Today is Friday';
        break;
    case 6 :
        message = 'Today is Saturday';
        break;
    case 7:
        message = 'Today is Sunday';
        break;
    default:
        message = 'Error: Please input a number between 1 and 7';
}
console.log(message)