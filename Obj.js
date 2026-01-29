// object is the collection of key and value pair
const person = {
    name: "Dip Sagarka",
    age: 20,
    hobbies:['cricket', 'coding', 'reading'],
    greet : function() {
        console.log("hello");

    }
}


// access value from Object
console.log(person.name);
console.log(person['name']);

// adding or modifiying the data of object
person.job = "developer"; // adding new key and value
person.city = "keshod"; // adding new key and value
person.salary = 50000; // adding new key and value
console.log(person);

//nested object
const student = {
    name: "Dip Sagarka",
    age: 22,
    address : {
        city: "keshod",
        country: "India",
        zipcode: 362220
    }
}
console.log(student);
console.log(student.address.city); //access nested object value
console.log(Object.keys(student));
console.log(Object.values(student));
console.log(Object.entries(student));

const user = {
    name : 'user',
    role : "admin",
    designation : "developer",
    age : 20,
    address : {
        city : "keshod",
        zipcode : 362220,
}
}
// const {name , age , role} = user; // object destructuring
// console.log(name);
// console.log(age);
// console.log(role);  

// const{name :profilename, age : profileage, role : profilerole} = user; // object destructuring with aliasing
// console.log(profilename);
// console.log(profileage);
// console.log(profilerole);

const {name,age,role,state = "gujrat"} = user; // object destructuring with default value
console.log(name);
console.log(age);
console.log(role);
console.log(state);

const array = [1,2,3,]
const moreElement = [...array,4,5,6]
console.log(moreElement);


const originalyArray = [1,2,3]
const copiedArray = [...originalyArray] // array copying using spread operator
console.log(copiedArray)

const arr1 = [1,2,3]
const arr2 = [4,5,6]
const combinedArray = [...arr1,...arr2] // combining two array using spread operator
console.log(combinedArray)


//MERGE OBJECT USING SPREAD OPERATOR
const user1 ={
    name : "Dip Sagarka",   
    city : "keshod",
}
const user2 = {
    address: "keshod",               // object copying using spread operator
    age : 22,
}

const newObj = {
     ...user1,
     ...user2,
    
}                          // adding new key and value using spread operator
console.log(newObj);
