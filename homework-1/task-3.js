"use strict";
// 1

let var1 = 1
let var2 = 0
let var3 = true // true = 1

console.log(var1 > var2) // true
console.log(var1 == var3) // true
console.log(var1 === var2) // false
console.log(var1 != var3) // false
console.log(var2 != var3) // true
console.log(var1 > var2 == var3) // true
console.log(var1 > var2 > var3) // false

// Ответ в 7 строке true( потому-что 1 больше 0 )
// Ответ в 8 строке true( потому-что 1 больше 0 )
// Ответ в 9 строке true( потому-что 1 это true )
// Ответ в 10 строке false( потому-что " === " сравнивает тип данних 1 = int, true = boolean )
// Ответ в 11 cтроке false( потому-что 1 ровняеться true(1) )
// Ответ в 12 строке true( потому-что 0 не ровняеться true(1) )
// Ответ в 13 строке true( потому-что получаеться true( потому-что 1 больше 0 ), а true = true )
// Ответ в 14 строке false( потому-что получаеться true( потому-что 1 больше 0 ), а true не больше true )

// 2

let val;
console.log(val);

val = "River";
console.log(isNaN(val)); // True
console.log(typeof val); // String 

val = "Mountain";
console.log(isNaN(val)); // True
console.log(typeof val); // String

val = 232;
console.log(isNaN(val)); // False
console.log(typeof val); // Num

val = true;
console.log(isNaN(val)); // False
console.log(typeof val); // Boolean

val = null;
console.log(isNaN(val)); // False
console.log(typeof val); // Object

// 3

// let alfa = 0.2;
// let beta = 0.4;

// let result = ((alfa * 10 + beta * 10) / 10);
// console.log(result);

// 4

let tetra;

tetra = '12px';
console.log(tetra); // 12px

tetra = '13.34em';
console.log(tetra); // 12.34em

// // 5

// console.log(Math.max(2, 34, 99, 3, 22, 36, 733, 18)); // 733
// console.log(Math.min(2, 34, 99, 3, 22, 36, 733, 18)); // 2

// 6

// let random = (Math.random() * (19 - 3) + 3);
// console.log(parseInt(random).toFixed(2))