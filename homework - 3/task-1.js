"use strict";

// 1

const user = {
    name: "Semen",
    age: 15,
    hobby: "html",
    premium: true,
};

user.mood = happy;
user.hobby = coding;
user.premium = false;

const toShowUpdatedUser = function (obj) {
  let save = Object.keys(obj);
  for (let key of save) {
    console.log(`${key}: ${obj[key]}`);
  }
};

toShowUpdatedUser(user);

// 2

function countProps(obj) {
    return Object.keys(obj).length;
}

console.log(countProps({})); // 0

console.log(countProps({ name: "Mango", age: 2 })); // 2

console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 })); // 3

// 3
const countTotalSalary = function (employees) {
  let sum = 0;
  let arrayOfValues = Object.values(employees);
  for (let cal of arrayOfValues) {
    sum += cal;
  }
  return sum;
};

console.log(

    countTotalSalary({
  
      mango: 100,
  
      poly: 150,
  
      alfred: 80,
  
    })
  
  ); // 330
  
  console.log(
  
    countTotalSalary({
  
      kiwi: 200,
  
      lux: 50,
  
      chelsy: 150,
  
    })
  
  ); // 400

// 4
const products = [
  { name: "Радар", price: 1300, quantity: 4 },
  { name: "Сканер", price: 2700, quantity: 3 },
  { name: "Дроид", price: 400, quantity: 7 },
  { name: "Захват", price: 1200, quantity: 2 },
];

const calculateTotalPrice = function (allProdcuts, productName) {
let money ;
for (let i = 0; i < allProdcuts.length; i+= 1) {

  let values = Object.values(allProdcuts[i]);
        if (values[0] === productName) {
            money = values[1] * values[2];
            return money;
        };
    };

    console.log(calculateTotalPrice(products, "Радар")); // 5200
console.log(calculateTotalPrice(products, "Дроид")); // 2800