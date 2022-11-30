let form = document.getElementsByTagName("form")[0]

let inputsWithNumbersIds = ["card-number", "exp-date-input-one", "exp-date-input-two", "cvc"]
console.log(inputsWithNumbersIds.includes("card-number"))

// form.addEventListener("input", (event) => {
//     allInputsEl.forEach(inputEl => {
//         console.log(inputEl.validity.patternMismatch)
//     })
// })

form.addEventListener("submit", (event) => {
    event.preventDefault()
    allInputsEl.forEach(inputEl => {
        if (inputEl.validity.patternMismatch) {
            let errorEl = document.querySelector(`.${inputEl.id}-error`)
            let numbersOrLetters = ""
            if (inputsWithNumbersIds.includes(errorEl.id)) {
                numbersOrLetters = "numbers"
            } else {
                numbersOrLetters = "letters"
            }
            errorEl.innerText = `Wrong format, ${numbersOrLetters} only`
            if (!errorEl.classList.contains("active")) {
                errorEl.classList.add("active")
            }
        }
    })
})

