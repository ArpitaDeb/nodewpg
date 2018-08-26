const user = {
    username: 'michelle',
    password: 'zehner',
    greet: function(username) {
        if (username == 'string') {
        console.log('Hello, I\'m user'+ username);
    } else {
        console.log('Please assign a username value');
    }},
    updaterusername: function(username){
        if (typeof username == 'string') {
        user.username=username;
    } else {
        console.log ('Please enter valid username in string value');
    }
    },
    updatepassword: function(password){
        if (typeof password == 'string') {
            user.username=password;
        } else {
            console.log ('Please enter valid password in string value');
        }
    } }
user.greet();
user.updaterusername();
user.updatepassword();