//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza: ["Deep Dish", "South Side Thin Crust"],
    tacos: "Anything not from Taco bell",
    burgers: "Portillos Burgers",
    ice_cream: ["Chocolate", "Vanilla", "Oreo"],
    shakes: [{
        oberwise: "Chocolate",
        dunkin: "Vanilla",
        culvers: "All of them",
        mcDonalds: "Sham-rock-shake",
        cupids_candies: "Chocolate Malt"
    }]
}

let fav_foods = (person) => {
    for (let i = 0; i < Object.keys(person).length; i++) {
        let key = Object.keys(person)[i];
        let val = Object.values(person)[i];
        if (Array.isArray(val) && typeof val[0] === 'object' && val[0] !== null && !Array.isArray(val[0])) {
            console.log(`This person's favorite ${key} are:`)
            for (let j = 0; j < Object.keys(val[0]).length; j++) {
                console.log(`\t${Object.keys(val[0])[j]}: ${Object.values(val[0])[j]}`)
            }
        } else {
            console.log(`This person's favorite thing to buy from ${key} is ${val}`)
        }
    }
}

fav_foods(person3)

//=======Exercise #2=========//
/*
Write an object prototype or class for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype/Class
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    printInfo = () => {
        console.log(`${this.name} is ${this.age} years old.`)
    }

    addAge = () => {
        return this.age += 1
    }
}

let maddie = new Person('Maddie', 28)
let kerrigan = new Person('Kerrigan', 4)

maddie.printInfo()
kerrigan.printInfo()

maddie.addAge()
maddie.addAge()
maddie.addAge()

maddie.printInfo()


// =============Exercise #3 ============//
/*
    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/

const isBigOrSmall = (aString) => {
    return new Promise((resolve, reject) => {
        aString.length > 10 ? resolve(true) : reject(false)
    })
}

isBigOrSmall('hello')
    .then((result) => {
        console.log("I am big")
    })
    .catch((error) => {
        console.log("I am small")
    })