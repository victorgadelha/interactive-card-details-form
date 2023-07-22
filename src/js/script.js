
const inputName = document.querySelector('#name')
const inputNumber = document.querySelector('#number')
const inputMonth = document.querySelector('#month')
const inputYear = document.querySelector('#year')
const inputCVC = document.querySelector('#cvc')
const formButton = document.querySelector('.form__button')

const cardNumber = document.querySelector('.card__front-card-number')

formButton.addEventListener('click', (e) => {
    e.preventDefault()
})

inputName.addEventListener('input', (e) => {
    let name = inputName.value
    validateName(name)
})

const validateName = (name) => {
    const isName = /^[a-zA-Z][a-zA-Z\s]*$/.test(name)
    if (!isName) {
        inputName.classList.add('form__invalid')
    }

    else {
        inputName.classList.remove('form__invalid')
        cardNumber.innerHTML = name
    }
}


