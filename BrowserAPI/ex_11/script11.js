const n = window.prompt('please enter your name');
userName = n;
const p = window.prompt('please enter your password');
password = p;
window.alert(`Welcome ${userName}`);
const ten = function () {
const  x = window.confirm('do you still want to be logged in');
    if (x == true) {
        alert(`${userName} Your session has been restored`);
} else {
        alert(`${userName} your session has been expired`);
}}
setTimeout(ten, 1000);