import throttle from 'lodash.throttle';

const formRef = document.querySelector('.feedback-form');
const LOCALSTORAGE_KEY = "feedback-form-state"

formRef.email.value = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)).email || "";
formRef.message.value = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)).message || "";

formRef.addEventListener('input', throttle(() => {
    console.log(formRef.email.value, " ", formRef.message.value);
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify({email: formRef.email.value, message: formRef.message.value}));
}, 500));

formRef.addEventListener('submit', (event) => {
    event.preventDefault();

    console.log(JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)));

    localStorage.clear();
    formRef.reset();
});