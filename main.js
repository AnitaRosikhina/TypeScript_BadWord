// Завдання 1
var city;
city = 'Київ';
city = 'Львів';
var address = city;
console.log(address);
// Завдання 2
// let num: number = +prompt('Write number')
// console.log(num == 0 ? 'дорівнює 0' : num % 2 === 0 ? 'Парне' : 'Не парне')
// Завдання 3
function max() {
    var arg = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        arg[_i] = arguments[_i];
    }
    return arg.reduce(function (a, b) { return a > b ? a : b; });
}
console.log(max(5, 6, 85, -5, 66, 0, 78, 101));
//Завдання 4
function getSqrt(num) {
    if (typeof num === 'number' && num > 0) {
        console.log(Math.sqrt(num));
    }
    else if (typeof num === 'number' && num < 0) {
        console.log('Введіть додате значення');
    }
    else if (num && typeof num !== 'number') {
        console.log('Повинно бути числове значення');
    }
    else {
        console.log('Будь ласка введіть число');
    }
}
getSqrt(-8);
getSqrt(225);
getSqrt();
getSqrt('asdasd');
var btnAdd = document.querySelector('.add');
var input = document.querySelector('.input_word');
var blockBadWord = document.querySelector('.bad_word');
var err = document.querySelector('.err');
var btnCenzor = document.querySelector('.btn_cenzor');
var textarea = document.querySelector('.textarea');
var errTextarea = document.querySelector('.err_textarea');
var btnReset = document.querySelector('.reset');
var bad_word = [];
btnAdd.addEventListener('click', function () {
    if (!input.value) {
        err.style.display = 'block';
    }
    else {
        blockBadWord.innerHTML += "<span>" + input.value + ", </span>";
        bad_word.push(input.value);
        console.log(bad_word);
        err.style.display = 'none';
        input.value = '';
    }
});
btnReset.addEventListener('click', function () {
    blockBadWord.innerHTML = '';
    bad_word = [];
    console.log(bad_word);
});
btnCenzor.addEventListener('click', function () {
    if (!textarea.value) {
        errTextarea.style.display = 'block';
    }
    else {
        var text = textarea.value;
        textarea.value = text.split(' ').map(function (a) { return bad_word.some(function (elem) { return elem == a; }) ? '*'.repeat(a.length) : a; }).join(' ');
    }
});
