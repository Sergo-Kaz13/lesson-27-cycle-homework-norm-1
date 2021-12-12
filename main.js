'use strict'

// ? Запитай у користувача п’ятирозрядне число і визначи, чи є воно паліндромом.

let start = true;

while (start) {
    let userNum = prompt("Введи п'яти розрядне число", '');

    if (userNum === null) {
        start = false;
    } else if (userNum.trim().length === 0 || +userNum !== +userNum) {
        alert('Введи дані в форматі число');
    } else if (userNum.length < 5 || userNum.length > 5) {
        alert("Введи п'яти розрядне число");
    } else {
        let userNumMirror = '';
        
        for (let i = userNum.length - 1; i >= 0; i--) {
            userNumMirror += userNum[i];
        }

        if (userNumMirror === userNum) {
            alert('Число поліндромне', '');
        } else {
            alert('Число не поліндромне', '');
        }
    }
}