//
// Object Destructuring
//

// const person = {
//     name: "Chris",
//     age: 35,
//     location: {
//         city: "Virginia Beach",
//         temp: 79
//     }
// };

// const { name, age } = person;
// console.log(`${name} is ${age}.`);

// const { city, temp: temperature } = person.location;

// console.log(`It's ${temperature} in ${city}.`);

// const book = {
//     title: "Ego is the Enemy",
//     author: "Ryan Holiday",
//     publisher: {
//         name: "Penguin"
//     }
// };

// const { name: publisherName = "Self-Published" } = book.publisher;

// console.log(publisherName); // Penguin, Self-Published

//
// Array destructuring
//

// const address = ["1299 S Juniper Street", "Philadelphia", "Pennsylvania", "19147"];

// const [, city, state] = address;

// console.log(`You are in ${city}, ${state}.`);

const item = ["Coffee (hot)", "$2.00", "$2.50", "$2.75"];
const [itemName, , price] = item;
console.log(`A medium ${itemName} costs ${price}`);
