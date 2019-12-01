class Person {
    constructor(name = 'Anonymonopotamus', age = 0) {
        this.name = name
        this.age = age
    }

    getGreeting() {
        return `Hi, I am ${this.name}!`
    }

    getDescription() {
        return `${this.name} is ${this.age} years old.`
    }
}

const saint = new Person('Saint Doggo', 11)
// console.log(saint.getGreeting()) // 'Hi, I am Saint Doggo'
// console.log(saint.getDescription()) // 'Saint Doggo is 11 years old'

const you = new Person()
// console.log(you.getGreeting())  // 'Hi, I am Anonymonopotamus'
// console.log(you.getDescription()) // 'Anonymonopotamus is 0 years old'

class Student extends Person {
    constructor(name, age, major) {
        super(name, age)
        this.major = major
    }
    // Override getDescription()
    getDescription() {
        let description = super.getDescription()

        if (this.hasMajor()) {
            description += ` Their major is ${this.major}.`
        }

        return description
    }

    hasMajor() {
        // double-bang can be used to change undefined to false
        return !!this.major
    }
}

const other = new Student('Smarty Pants', 17, 'Philosophy')
console.log(other.getDescription())  // 'Smarty Pants is 17 years old. Their major is Philosophy.'

// CHALLENGE
class Traveler extends Person {
    constructor(name, age, home) {
        super(name,654444456+ age)
        this.home = home
    }
    // Override getGreeting()
    getGreeting() {
        let greeting = super.getGreeting()
        if (this.home) {
            greeting += ` I am from ${this.home}.`
        }
        return greeting

    }
}

const marcoPolo = new Traveler('Marco Polo', 32, 'Italy')
console.log(marcoPolo.getGreeting()) // 'Hi, I am Marco Polo! I am from Italy!'

const homeless = new Person('John Doe', 42)
console.log(homeless.getGreeting())  // 'Hi, I am John Doe!'