//1. пользователь вводит 2 числа, вывести в консоль большее из них

// let num1 = +prompt('enter num1');
// let num2 = +prompt('enter num2');

// if (num1 > num2) {
//     console.log(num1);
// } else if (num2 > num1) {
//     console.log(num2);
// } else {
//     console.log('they are equal');
// }

//2. пользователь вводит 3 числа, первые два это числа которые он хочет перемножить
// третье число, это результат умножения по мнению пользователя
// выяснить правильно ли ответил пользователь и вывести в консоль ОК если правильно
// NOT OK {rightAnswer} если неправильно

const num1 = +prompt('enter num1');
const num2 = +prompt('enter num2');
const userResult = +prompt('enter result');

const rightAnswer = num1 * num2;

if (userResult === rightAnswer) {
    console.log('OK');
} else {
    console.log(`NOT OK ${rightAnswer}`);
}