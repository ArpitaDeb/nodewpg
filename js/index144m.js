const user = {
    userName: 'batman',
    password: 'Alfred1960ROCKS!'
};
console.log(user.userName.slice(0,1).toUpperCase() + user.userName.slice(1));
console.log(user.password.slice(0,6) + " " + user.password.slice(10,16));