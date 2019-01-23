

// Задача на if/else: якщо значення змінної більше 10, то виводити в консоль "This number is more than 10", якщо менше - "This number is less than 10"
let x = 10;
if (x > 10) {
    console.log('This number is more than 10');
} else if (x < 10) {
    console.log('This number is less than 10');
} else {
    console.log('This number is 10');
}

//Задача на switch
let lang = 'ru'
let ruMonth = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь']
let enMonth = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
switch (lang) {
    case 'ru':
        console.log(ruMonth);
        break;
    case 'en':
        console.log(enMonth);
        break;
    default:
        console.log('Error');
}

//Здача на for: Стоврити масив із 10 елементів і вивести в консоль лише парні елементи цього масиву
for (let i = 2; i <= 10; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}

//Задача на while: Вивести в консоль всі числа від 1 до 15 (включно)
let i = 1;
while (i < 16) {
    console.log(i);
    i++;
}


// Вам потрібно створити функції калькулятора (відмімання, додавання, ділення, множення), в які передаються 2 аргументи і результати обчислення виводяться в консоль
function plus(x, y) {
    return (x + y);
}

function subtraction(x, y) {
    return (x - y);
}

function multiplication(x, y) {
    return (x * y);
}

function division(x, y) {
    return (x / y);
}
