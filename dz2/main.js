
let num1 = Number(prompt("Введите первое число:"));
let num2 = Number(prompt("Введите второе число:"));
let num3 = Number(prompt("Введите третье число:"));
let maxNumber = Math.max(num1, num2, num3);
console.log("Самое большое число:", maxNumber);


let userAge = Number(prompt("Введите ваш возраст для проверки диапазона:"));
let isValidAge = userAge >= 18 && userAge <= 60;
console.log("Возраст в диапазоне от 18 до 60:", isValidAge);


const correctUser = "admin";
const correctPass = "12345";
let inputUser = prompt("Введите username:");
let inputPass = prompt("Введите password:");

if (inputUser === correctUser && inputPass === correctPass) {
    console.log("Вы успешно вошли в систему");
} else {
    console.log("Некорректный username или пароль");
}


let score = 0;
const ans1 = "4";
const ans2 = "москва";
const ans3 = "js";
const ans4 = "солнце";
const ans5 = "7";

if (prompt("Сколько будет 2 + 2?") === ans1) score++;
if (prompt("Столица России? (напиши с маленькой буквы)").toLowerCase() === ans2) score++;
if (prompt("Язык программирования для браузера? (кратко)").toLowerCase() === ans3) score++;
if (prompt("Какая звезда в центре нашей системы?").toLowerCase() === ans4) score++;
if (prompt("Сколько дней в неделе?") === ans5) score++;

console.log("Количество правильных ответов:", score);


let testNum = Number(prompt("Введите число для проверки деления на 2 или 7:"));
if (testNum % 2 === 0 || testNum % 7 === 0) {
    console.log("Подходит");
} else {
    console.log("Не подходит");
}


let purchaseSum = Number(prompt("Введите сумму покупки:"));
if (purchaseSum > 5000) {
    console.log("Сумма со скидкой:", purchaseSum * 0.9);
} else {
    console.log("Сумма без скидки:", purchaseSum);
}


let letter = prompt("Введите одну букву на английском:").toLowerCase();
let isVowel = letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u';
console.log("Является ли гласной:", isVowel);


let baseNumber = Number(prompt("Введите число:"));
let percentValue = Number(prompt("Введите процент, который нужно вычислить:"));
let resultPercent = (baseNumber * percentValue) / 100;
console.log("Результат процента от числа:", resultPercent);