"use strict";

// 1

const user = {
    name: "Semen",
    age: 15,
    hobby: "html",
    premium: true,
};

const toShowUpdatedUser = function (obj) {
    user.mood = "happy";
    user.hobby = "coding";
    user.premium = "false";

};

toShowUpdatedUser(user);    
console.log(user);

// 2

function countProps(obj) {
    return Object.keys(obj).length;
}

console.log(countProps({})); // 0

console.log(countProps({ name: "Mango", age: 2 })); // 2

console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 })); // 3

// 3
function countTotalSalary(employees){
  let employer = Object.values(employees);
  let sum = 0;
    for (let val of employer) {
      sum += val;
    }
  console.log(sum);
}

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