// two types of data types in JavaScript
// 1. Primitive data types
    //    Number
    //    BigInt
    //    String
    //    Boolean  
    //    Symbol
    //    Null
    //    Undefined


//----NUMBER----
// let num = 1;
// let num2 = 2;

// console.log("Number:", num , num2);

//----STRING----
// let name = "prince";
// let name2 = 'kumar';

// console.log("name:", name , name2);

//----BOOLEAN----
// let isTrue = true;
// let isFalse = false;
// console.log("Boolean:", isTrue , isFalse);

//----UNDEFINED----
// let undef;
// console.log("Undefined:", undef);

//----NULL----
// let empty = null;
// console.log("Null:", empty);

//----SYMBOL----
// let sym1 = Symbol('hello');
// let sym2 = Symbol('hello');
// console.log("Symbol:", sym1 === sym2); // false  

//----BIGINT----    
// let bigIntNum = BigInt(123456789012345678901234567890);
// console.log("BigInt:", bigIntNum);


// 2. Non-primitive data types
    //   Array
    //   Object
    //   Function

//----OBJECT----
// let student = {
//     name: "Dip",
//     age: 22,
//     address: {
//         city: "keshod",
//         country: "India"
//     }
// };
// console.log("Object:", student);

//----ARRAY----
// let numbers = [1, 2, 3, 4, 5];
// console.log("Array:", numbers);

//----FUNCTIN----
// simple function
// function greet() {
//     return "Hello, World!";
// }
// console.log("Function:", greet());

// parameterized function
// function showValues(value) {
//     console.log("Value:", value);
//     if(value == 20){
//     console.log("number");
//     }
// }
// showValues();
// showValues(20);
// showValues([1, 2, 3]);

// addition function
// function add(a, b) {
//     return a + b;
// }   
// console.log("Addition:", add(5, 10));

// substraction function
// function subtract(a, b) {
//     return a - b;
// }
// console.log("Subtraction:", subtract(10, 5));

// multiplication function
// function multiply(a, b) {
//     return a * b;
// }   
// console.log("Multiplication:", multiply(5, 10));

// division function    
// function divide(a, b) {
//     return a / b;
// }
// console.log("Division:", divide(10, 5));

// Arithmetic operations using parameterized functions
// function arithmeticOperations(x, y) {
//     console.log("Addition:", add(x, y));
//     console.log("Subtraction:", subtract(x, y));
//     console.log("Multiplication:", multiply(x, y));
//     console.log("Division:", divide(x, y));
// }   
// arithmeticOperations(20, 4);

// ARROW FUNCTION

// const add  = (num , num2) => {
//     return num + num2
//     // console.log  //not run after define return
// }
// console.log('this is arrow fun :' , add(10 , 5))

// arithmetic operation using array function
//    const add  = (a , b) => a + b;
//    const subtract = (a , b) => a - b;
//    const multiply = (a , b) => a * b;
//    const divide = (a , b) => a / b;
//    console.log("Addition:", add(30, 15));
//    console.log("Subtraction:", subtract(30, 20));
//    console.log("Multiplication:", multiply(10, 5));
//    console.log("Division:", divide(20, 5));

// assignment operations
// let value = 20;
// console.log("Logical Operations:");

// value += 10; // value = value + 10
// console.log(value);

// value -= 5; // value = value - 5
// console.log(value);

// value *= 2; // value = value * 2
// console.log(value);

// value /= 5; // value = value / 5
// console.log(value);

// logical operations

let age = 20;
let hasId = true;   
let name = "dip";

console.log("AND (&&):", age >= 18 && hasId); 
console.log("OR (||):", age >= 18 || hasId); 
console.log("NOT (!):", !hasId);     

console.log(typeof age);         
console.log(typeof hasId);
console.log(typeof name);