// PART 1
const getFirstName = (fullName) => {
    return fullName.split(' ')[0]
}

const getFirstNameExpressionSyntax = (fullName) => fullName.split(' ')[0]

// console.log(getFirstName('Anthony Ellis'))

// console.log(getFirstNameExpressionSyntax('Rosa Ellis'))

// PART 2

/* 
Arguments object is no longer bound with arrow functions. Accessing arguments does not work. 

In the past, you could console.log(arguments) and receive an object with all objects passed in the function 
call, regardless if there was room for them in the initial function construction. If you wind up needing to 
use the arguments object, stick with ES5.
*/

const add = function (a, b) {
    console.log(arguments)
    return a + b
}

// console.log(add(55, 1, 15, 90))

const addArrowFunction = (a, b) => {
    //  console.log(arguments)  - ReferenceError - arguments is not defined
    return a + b
}

/*
'this' keyword' is no longer bound with arrow functions.
*/

/*
const user = {
    name: 'Anthony',
    cities: ['New Orleans', 'Laguna Beach'],
    printPlacesLived: function () {
        console.log(this.name)
        console.log(this.cities)
        // this.name undefined because the .forEach function is anonymous.
        this.cities.forEach(function (city) {
            console.log(`${this.name} has lived in ${city}.`)
        })
    }
}
*/

// There have been workarounds
/*
const user = {
    name: 'Anthony',
    cities: ['New Orleans', 'Laguna Beach'],
    printPlacesLived: function () {
        console.log(this.name)
        console.log(this.cities)
        // this.name undefined because the .forEach function is anonymous.
        const that = this
        this.cities.forEach(function (city) {
            // swap this for that
            console.log(`${that.name} has lived in ${city}.`)
        })
    }
}
*/

/*
const user = {
    name: 'Anthony',
    cities: ['New Orleans', 'Laguna Beach'],
    printPlacesLived: function () {
        console.log(this.name)
        console.log(this.cities)
        // when switched to arrow function, it does work. With arrow functions, they don't bind their own
        // 'this' value. They use the 'this' value of the context in which they were created. So this.name
        // looks to the parent
        this.cities.forEach((city) => {
            console.log(`${this.name} has lived in ${city}.`)
        })
    }
}
*/

/* 
The fact that an arrow function doesn't bind its own 'this' value but that of the context in which it was 
created means it does not work well with methods.
*/

/*
const user = {
    name: 'Anthony',
    cities: ['New Orleans', 'Laguna Beach'],
    printPlacesLived: () => {
        console.log(this.name)
        console.log(this.cities)
        // this.cities is undefined because the arrow function of printPlacesLived goes to the parent scope, 
        // which is global, where cities is not defined. Use es5 for methods
        this.cities.forEach((city) => {
            console.log(`${this.name} has lived in ${city}.`)
        })
    }
}
*/

// works
/*
const user = {
    name: 'Anthony',
    cities: ['New Orleans', 'Laguna Beach'],
    printPlacesLived: function () {
        console.log(this.name)
        console.log(this.cities)
        // this.cities is undefined because the arrow function of printPlacesLived goes to the parent scope, 
        // which is global, where cities is not defined. Use es5 for methods
        this.cities.forEach((city) => {
            console.log(`${this.name} has lived in ${city}.`)
        })
    }
}
*/


// Lastly, ES6 has a special method syntax if you want to clean up the above.
/*
const user = {
    name: 'Anthony',
    cities: ['New Orleans', 'Laguna Beach'],
    // omit ': function' for es6 syntax 
    printPlacesLived() {
        console.log(this.name)
        console.log(this.cities)
        this.cities.forEach((city) => {
            console.log(`${this.name} has lived in ${city}.`)
        })
    }
}
*/

// using map for printPlacesLived(). .map creates new array which can be manipulated while keeping 
// original array in tact.

/*
const user = {
    name: 'Anthony',
    cities: ['New Orleans', 'Laguna Beach'],
    printPlacesLived() {
        const cityMessages = this.cities.map((city) => {
            return `${this.name} has lived in ${city}`
        })
    }
}
*/

// ...which can be simplified to 
const user = {
    name: 'Anthony',
    cities: ['New Orleans', 'Laguna Beach'],
    printPlacesLived() {
        return this.cities.map((city) => `${this.name} has lived in ${city}`)
    }
}
console.log(user.printPlacesLived())

// CHALLENGE
// 

const multiplier = {
    // array of nums to multiply - numbers
    nums: [10, 20, 30],
    // single number - multiplyBy
    multiplyBy: 3,
    // create method called multiply that get new array back with the answer
    multiply() {
        return this.nums.map((num) => num * this.multiplyBy
        )
    }
}

console.log(multiplier.nums)

console.log(multiplier.multiply())
console.log(multiplier.nums)