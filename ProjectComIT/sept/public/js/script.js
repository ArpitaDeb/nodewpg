window.onload = function getInput() {
    const form = document.querySelector('form');

    const validateUser = function (username) {
        const regex = /^[a-z0-9]+$/i;

        return regex.test(username);
    }

    const validatePasswd = function (password) {
        const regex = /^[a-z0-9]+$/i;

        return regex.test(password);
    }
    const validateEmail = function (email) {

        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

        return emailRegex.test(email);
    }

    form.onsubmit = function (event) {
        event.preventDefault();

        const username = form.elements[0];
        const password = form.elements[1]
        const mail = form.elements[2];

        if (!validateUser(username.value)) {
            console.log('Incorrect username');
            return false;
        }
        if (!validatePasswd(password.value)) {
            console.log('Incorrect password');
            return false;
        }

        if (!validateEmail(mail.value)) {
            console.log('Incorrect Email');
            return false;
        }
        return true;
    }
}    