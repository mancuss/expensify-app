
//OBJECT DISTRUCTURING

console.log("destructuring")

const person = {
    name: "Lukasz",
    age: 34,
    location: {
        city: "Edinburgh",
        temp:15
    }
}
// old way
// const name = person.name
// const age = person.age
// new way

const {name:firstName = "John Doe", age} = person; // changing varible name and setting default name if it doesnt exist

console.log(`${firstName} is ${age}`)


// if (person.location.city && person.location.temp){
//     console.log(`It's ${person.location.temp} in ${person.location.city}`) //this can get LONG    
// }
const {city, temp: temperature} = person.location //renaming temp to temerature

if (city && temperature) {
    console.log(`It's ${temperature} in ${city}`)
}


const book = {
    title: 'Book title',
    author: 'Book author',
    published: {
        name: 'Penguin'
    }
}

const {name:publisherName = "Self published"} = book.published

console.log(publisherName)



//Array DISTRUCTURING


const address = ['address 1', 'city 1', 'stateName 1', 'zipcode 1']

const [street, city, state = "default value", zip] = address //state with defaultr option if it doesnt exist in the list above

console.log(`You are in ${city} ${state}`)

const item = ['Coffee', '2.00', '2.50', '2.75']

const [itemName, smallCost, mediumCost] = item

console.log(`A medium ${itemName} costs ${mediumCost}`)

















