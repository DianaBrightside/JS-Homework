
// Task 0
let firstNum = 150;
let secondNum = 310;
let firstText = "Hello World!";

const birthYear = 1964;
const birthDay = 28;
const birthMonth = "January";

var event = "Womens' Day";
var day = 08;
var month = 03;

// Task 1

/*for (n = 0; n <=2; n++){
    if (n % 2 == 1){
        console.log(n);
    }
}*/

let n = 17,
    m = 4;

if (n % 2 === 1) {
    console.log(n);
}
else {
    console.log(m);
}

// Task 2

let year = prompt("Введите год:");
if (year % 4 === 0) {
    console.log("Год високосный")
}
else {
    console.log("Год не високосный")
}

// Task 3

let number1 = Number(prompt("Insert first number:")),
    number2 = Number(prompt("Insert second number:")),
    number3 = Number(prompt("Insert third number:"));
console.log(number1);
console.log(number2);
console.log(number3);
if (number1 >= number2 && number1 <= number3) {
    console.log(number1)
}
else if (number2 >= number1 && number2 <= number3) {
    console.log(number2)
}
else {
    if (number3 >= number1 && number3 <= number2) {
        console.log(number3)
    }
}


// Task 4
let num1 = Number(prompt("Insert first number:")),
    num2 = Number(prompt("Insert second number:")),
    num3 = Number(prompt("Insert third number:"));
console.log(num1);
console.log(num2);
console.log(num3);
if (num1 > num2 && num1 > num3) {
    console.log(num1)
}
else {
    if (num2 > num1 && num2 > num3) {
        console.log(num2)
    }
    else {
        if (num3 > num1 && num3 > num2) {
            console.log(num3)
        }
    }
}