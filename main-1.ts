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

let hello: string = 'hello';
console.log(hello);

let owu: string = 'owu';
console.log(owu);

let com: string = 'com';
console.log(com);

let ua: string = 'ua';
console.log(ua);

let one: number = 1;
console.log(one);

let ten: number = 10;
console.log(ten);

let NineNineNine: number = -999;
console.log(NineNineNine);

let OneHundredThree: number = 123;
console.log(OneHundredThree);

let pi: number = 3.14;
console.log(pi);

let TwoSeven: number = 2.7;
console.log(TwoSeven);

let sixteen: number = 16;
console.log(sixteen);

const OneTrue: boolean = true;
console.log(OneTrue);

let OneFalse: boolean = false;
console.log(OneFalse);

console.log('-------------2-----------------');
// //---------------------------------------------
// // -----2------
// // --------------------------------------------

let firstName: string = 'Grabynsky';
let middleName: string = 'Andrew';
let lastName: string = 'Vasylvych';

console.log(firstName + ' ' + middleName + ' ' + lastName);
console.log(`${firstName} ${middleName} ${lastName}`);

// //---------------------------------------------
// // -----3------
// // --------------------------------------------
//
console.log('-------------3-----------------');

let a: number = 100;
let b: string = '100';
let c: boolean = true;

console.log('a', typeof a);
console.log('b', typeof b);
console.log('c', typeof c);

// //---------------------------------------------
// // -----3------
// // --------------------------------------------
//
console.log('-------------4-----------------');

let firstName1: string | null = prompt('Введіть імя');
let nameFather: string | null = prompt('Введіть як Вас по-батькові');
// let year1: number | null = +prompt('Enter year birthday');

// console.log(`${firstName1} ${nameFather} - ${year1}`);
console.log(`${firstName1} ${nameFather}`);