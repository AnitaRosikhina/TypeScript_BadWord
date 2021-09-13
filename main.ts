// Завдання 1
let city: string
city = 'Київ'
city = 'Львів'
let address: string = city
console.log(address)

// Завдання 2
// let num: number = +prompt('Write number')
// console.log(num == 0 ? 'дорівнює 0' : num % 2 === 0 ? 'Парне' : 'Не парне')

// Завдання 3
function max (...arg: Array<number>) {
    return arg.reduce((a, b) => a > b ? a : b)
}
console.log(max(5, 6, 85, -5, 66, 0, 78, 101))

//Завдання 4
function getSqrt(num?: number | string): void {
    if(typeof num === 'number' && num > 0) {
        console.log(Math.sqrt(num))
    } else if(typeof num === 'number' && num < 0) {
        console.log('Введіть додате значення')
    } else if (num && typeof num !== 'number') {
        console.log('Повинно бути числове значення')
    } else {
        console.log('Будь ласка введіть число')
    }
}

getSqrt(-8)
getSqrt(225)
getSqrt()
getSqrt('asdasd')

let btnAdd = document.querySelector('.add') as HTMLElement
let input = document.querySelector('.input_word') as HTMLInputElement
let blockBadWord = document.querySelector('.bad_word') as HTMLElement
let err = document.querySelector('.err') as HTMLElement
let btnCenzor = document.querySelector('.btn_cenzor') as HTMLElement
let textarea = document.querySelector('.textarea') as HTMLInputElement
let errTextarea = document.querySelector('.err_textarea') as HTMLElement
let btnReset = document.querySelector('.reset') as HTMLElement
let bad_word = []

btnAdd.addEventListener('click', function() {
    if (!input.value) {
        err.style.display = 'block'
    } else {
        blockBadWord.innerHTML += `<span>${input.value}, </span>`
        bad_word.push(input.value)
        console.log(bad_word)
        err.style.display = 'none'
        input.value = ''
    }
})

btnReset.addEventListener('click', function() {
    blockBadWord.innerHTML = ''
    bad_word = []
    console.log(bad_word)
})

btnCenzor.addEventListener('click', function () {
    if(!textarea.value) {
        errTextarea.style.display = 'block'
    } else {
        let text = textarea.value
        textarea.value = text.split(' ').map(a => bad_word.some(elem => elem == a)? '*'.repeat(a.length):a).join(' ')
    }
})



