let form = document.querySelector('form');
let notifybtn = form.querySelector('[type="submit"]');
let message = "Please provide a valid email address";

let error = document.createElement('p');
error.classList.add('error_text');
error.textContent = message;

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let email = e.target.querySelector('[type="email"]').value;
    if(!validateEmail(email)) {
        form.classList.add('error');
        form.insertBefore(error, notifybtn);
    } else if (validateEmail(email) === "") {
        form.classList.add('error');
        form.insertBefore(error, notifybtn);
        error.textContent = "Whoops! It looks like you forgot to add your email";
    } else {
        form.classList.remove('error');
        form.removeChild(error);
    }
    console.log(email);

    function validateEmail(email) {
        const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/u;
        return regex.test(email);
    }
})