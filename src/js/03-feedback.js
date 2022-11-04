import throttle from 'lodash.throttle';

const formRef = document.querySelector('.feedback-form');
const LOCALSTORAGE_KEY = "feedback-form-state"

function getStorage(storageKey) {
    if (!JSON.parse(localStorage.getItem(storageKey))) {
        return {};
    }
    return JSON.parse(localStorage.getItem(storageKey));
}

function updateFormField(formField, storageField) {
    if (storageField) {
        formField.value = storageField;
    };
}

function updateForm(form, storageKey) {
    updateFormField(form.elements.email, getStorage(storageKey).email);
    updateFormField(form.elements.message, getStorage(storageKey).message);
}

function saveData(event, storageKey) {
    let {email, message} = event.currentTarget.elements;

    localStorage.setItem(storageKey, JSON.stringify({email: email.value, message: message.value}));
}

function clearData(event, storageKey) {
    event.preventDefault();

    console.log(getStorage(storageKey));

    event.currentTarget.reset();
    localStorage.clear();
}

updateForm(formRef, LOCALSTORAGE_KEY);

formRef.addEventListener('input', (event) => throttle(saveData(event, LOCALSTORAGE_KEY), 500));
formRef.addEventListener('submit', clearData(LOCALSTORAGE_KEY));