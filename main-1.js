"use strict";
// // - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
// //     Вивести кожну змінну за допомогою: console.log
// //
// // - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)
// //
// // - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
// //     let a = 100; let b = '100'; let c = true;
// //
// // Додаткове для тих хто цікавився prompt`oм
// // - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками. та вивести в консоль
//
// //---------------------------------------------
// // -----1------
// // --------------------------------------------
//
console.log('-------------1-----------------');
let hello = 'hello';
console.log(hello);
let owu = 'owu';
console.log(owu);
let com = 'com';
console.log(com);
let ua = 'ua';
console.log(ua);
let one = 1;
console.log(one);
let ten = 10;
console.log(ten);
let NineNineNine = -999;
console.log(NineNineNine);
let OneHundredThree = 123;
console.log(OneHundredThree);
let pi = 3.14;
console.log(pi);
let TwoSeven = 2.7;
console.log(TwoSeven);
let sixteen = 16;
console.log(sixteen);
const OneTrue = true;
console.log(OneTrue);
let OneFalse = false;
console.log(OneFalse);
console.log('-------------2-----------------');
// //---------------------------------------------
// // -----2------
// // --------------------------------------------
let firstName = 'Grabynsky';
let middleName = 'Andrew';
let lastName = 'Vasylvych';
console.log(firstName + ' ' + middleName + ' ' + lastName);
console.log(`${firstName} ${middleName} ${lastName}`);
// //---------------------------------------------
// // -----3------
// // --------------------------------------------
//
console.log('-------------3-----------------');
let a = 100;
let b = '100';
let c = true;
console.log('a', typeof a);
console.log('b', typeof b);
console.log('c', typeof c);
// //---------------------------------------------
// // -----3------
// // --------------------------------------------
//
console.log('-------------4-----------------');
let firstName1 = prompt('Введіть імя');
let nameFather = prompt('Введіть як Вас по-батькові');
// let year1: number | null = +prompt('Enter year birthday');
// console.log(`${firstName1} ${nameFather} - ${year1}`);
console.log(`${firstName1} ${nameFather}`);
