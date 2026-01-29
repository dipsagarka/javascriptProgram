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