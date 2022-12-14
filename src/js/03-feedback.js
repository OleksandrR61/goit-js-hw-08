import throttle from 'lodash.throttle';

const formRef = document.querySelector('.feedback-form');
const LOCALSTORAGE_KEY = "feedback-form-state";

if (JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY))) {
    formRef.email.value = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)).email || "";
    formRef.message.value = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)).message || "";
};

formRef.addEventListener('input', throttle(() => {
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify({email: formRef.email.value, message: formRef.message.value}));
}, 500));

formRef.addEventListener('submit', (event) => {
    event.preventDefault();

    console.log(JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)));

    localStorage.removeItem(LOCALSTORAGE_KEY);
    formRef.reset();
});