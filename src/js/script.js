
const inputName = document.querySelector('#name')
const inputNumber = document.querySelector('#number')
const inputMonth = document.querySelector('#month')
const inputYear = document.querySelector('#year')
const inputCVC = document.querySelector('#cvc')
const formButton = document.querySelector('.form__button')

formButton.addEventListener('click', (e) => {
    e.preventDefault()
})

inputName.addEventListener('input', (e) => {
    validateName(e)
})

const validateName = (e) => {
    let name = e.target.value.trim()
    const isName = /^[a-zA-Z\s]*$/.test(name)
    if (!isName) {
        inputName.classList.add('form__invalid')
    }

    else if (isName || name === '') {
        inputName.classList.remove('form__invalid')
    }

}


