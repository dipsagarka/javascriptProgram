// STRING METHODS IN JAVASCRIPT
// length()
// trim()
// toUpperCase()
// toLowerCase()
// includes()
// indexOf()
// slice()
// substring()
// replace()
// concat()
// split()

let str = "   Hello, Dip Sagarka!   ";
console.log(str);
console.log("Length:", str.length); //give length with spaces

let trimText = str.trim();
console.log("Trimmed:", trimText);
console.log("Trimmed Length:", trimText.length); //give length after trim

console.log("Uppercase:", str.toUpperCase());
console.log("Lowercase:", str.toLowerCase());

console.log("Includes 'Dip':", str.includes("Dip")); //check includes value or not and give boolean value

console.log("Index of 'Sagarka':", str.indexOf("Sagarka")); //find index

console.log("Slice (7, 10):", str.slice(7, 10)); //use minus values

console.log("Substring (7, 10):", str.substring(7, 10)); // not used any minus values

let replacedStr = str.replace("Hello", "HYYY");
console.log("Replaced String:", replacedStr); //replace value

let concatStr = str.concat(" Welcome to JavaScript.");
console.log("Concatenated String:", concatStr); //concat value

let splitStr = str.split(" ");
console.log("Split String:", splitStr); //split value into array