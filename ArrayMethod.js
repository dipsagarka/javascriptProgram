// ARRAY METHOD

// length()
// Push()
// pop()
// unshift()
// shift()
// concat()
// includes()
// indexof()
// splice()
// slice()
// join()
// delete()
// map()
// filter()
// find()
// forEach()
// sort()
// reverse()
// flat()

let arr = ['one', 'two', 'three' , 1 , {name : 'name'}]
console.log("Default Array : " , arr)

console.log("length() : ", arr.length)

// console.log("push() :", arr.push("new added element"));
arr.push("new added element")             //add Element last position
console.log("array after push :", arr);

arr.pop()                                 //delete element in last position
console.log("array after pop :", arr);

arr.unshift("first element added")         // add element at first position
console.log("array after unshift :", arr);

arr.shift()                               //delete element at first position
console.log("array after shift :", arr);

let newArr = ["str 1", "str 2"];          //joint two array 
let mixedArr = arr.concat(newArr)
console.log("Defualt Array after concat :", arr);
console.log("array after concat :", mixedArr);

console.log("include() :", arr.includes("three"));   //give a boolean value if match element

console.log("indexof() :", arr.indexOf(1));          //give index of element

arr.splice(2, 0, "inserted element")            // add element at specific position
console.log("array after splice :", arr);

let slicedArr = arr.slice(1,4)                  // create new array from existing array
console.log("sliced array :", slicedArr);
console.log("old array :", arr);

console.log("join() :", arr.join(", "));           // convert array to string with separator

delete arr[4]                                   // delete element but not change index
console.log("array after delete :", arr);

console.log("Array intration method :");
let numbers = [1, 2, 3, 4, 5];

console.log("map :" , numbers.map(num => num * 2));      // create new array after perform operation on each element
console.log("after map old array :", numbers);

console.log("filter :", numbers.filter(num => num > 2));   // create new array after filter element based on condition
console.log("after filter old array :", numbers);

console.log("forEach() :", numbers.forEach(num => console.log(num))); // perform operation on each element but not create new array

let num = [3,5,2,4,1]
console.log("sort() :", num.sort());               // sort array in ascending order

console.log("reverse() :", num.reverse());        // reverse array

let nestedArr = [1, 2, [3, 4], [5, 6, [7, 8]]];
console.log("flat() :", nestedArr.flat(2));       // flatten nested array


//array distincturing
let array = [10, 20, 30, 40, 50];
const [first, second, ...rest] = array;
console.log("First Element :", first);
console.log("Second Element :", second);
console.log("Rest Elements :", rest);

//skipping values
let array1 = [1,2,3,4]
const [ , , thirdElement ] = array1;
console.log("Third Element :", thirdElement);
