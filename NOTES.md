# NOTES

## 3.12 - Conditional Rendering
- You can use _if statements_, _ternary operators_, or _logical && operator_ for conditional rendering

- _if statements_ do not work within JavaScript expressions. The _if statement_ needs to be placed in a function and that function needs to be called.

- When a JavaScript expression resolves to _undefined_ in JSX, nothing shows up. This allows for conditional appearance of segments of JSX.

- In JavaScript expressions, _booleans_ are ignored. For the _logical && operator_, if first value is truthy it is skipped and the second value is used. If first value is false, the false value is returned, ignored and will not show.

- The _ternary operator_'s best use case is for 2 options are available. The _logical && method_ is best for only wanting to show one thing or nothing at all. Having _if statements_ broken into their own functions work but are long and should be used when there are 3 possible outcomes.

- Examples:

```
var user = {
    name: 'Anthony',
    age: 15,
    location: 'Baton Rouge, LA'
}

function getLocation(location) {
    if (location) {
        return <p>Location: {location}</p>
    }
}

var userInfo = (
    <div>
        <h1>{user.name ? user.name : 'Anonymous'}</h1>
        {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
        {getLocation(user.location)}
    </div>
)
```

## 3.13 - ES6 Aside: const and let
- _var_ pitfalls include: 
    
    - the ability to redefine a variable (not just reassign), opening the possibility of recrating a variable already being used and overriding the prior version. With _const/let_, redefining throws an error.
    
    - not _block scope_. _var_ variables can leak out into the _global space_. _const/let_ prevent this.

## 3.14 - Arrow Functions
- Arrow functions are always anonymous. There is no way to define a named arrow functions like ES5 functions. If you want to create the function and use it later, it must be assigned to a variable.

```
const squareArrow = (x) =>
    return x * x
}
```

- _Expression Syntax_ allows for more succinct functions in certain instances, such as when all the function does is return an expression. It is implicitly returned. 

```
const squareArrow = (x) => x * x
```

## 3.15 - Arrow Functions (Part 2)

- Arguments object is no longer bound with arrow functions. Accessing arguments does not work. In the past, you could console.log(arguments) and receive an object with all objects passed in the function call, regardless if there was room for them in the initial function construction. If you wind up needing to use the arguments object, stick with ES5.

```
const addArrowFunction = (a, b) => {
//  console.log(arguments)  - ReferenceError - arguments is not defined
    return a + b
}
```

- Arguments object is no longer bound with arrow functions. Accessing arguments does not work. 

In the past, you could console.log(arguments) and receive an object with all objects passed in the function call, regardless if there was room for them in the initial function construction. If you wind up needing to use the arguments object, stick with ES5.

```
const addArrowFunction = (a, b) => {
    //  console.log(arguments)  - ReferenceError - arguments is not defined
    return a + b
}
```

- _this_ keyword is no longer bound due to _arrow functions_ being anonymous, which can be good or bad. Arrow functions use the _this_ value of the context in which they were created. They look to the parent.

```
const user = {
    name: 'Anthony',
    cities: ['New Orleans', 'Laguna Beach'],
    printPlacesLived: function () {
        this.cities.forEach((city) => {
            console.log(`${this.name} has lived in ${city}.`)
            // this.name above works because it looks to parent context
        })
    }
}
```

- For methods, the _this_ keyword not binding is an issue because the parent context is typically the global scope. The _this_ value of its parent return undefined. So you either have to use es5 funcitons or use the special ES6 method syntax.

```
const user = {
    name: 'Anthony',
    cities: ['New Orleans', 'Laguna Beach'],
//  es5 version    

//  printPlacesLived: function () {

// or for ES6 version, omit ': function'
    printPlacesLived() {
        console.log(this.name)
        console.log(this.cities)
        this.cities.forEach((city) => {
            console.log(`${this.name} has lived in ${city}.`)
        })
    }
}
*/
```


## 3.15 - Events and Attributes
- Certain attributes are reserved in JavaScript but in common use in HTML. As a result, there are slight differences, such as having to use _className_ instead of _class_ as the attribute. A full list can be found in React docs under 'DOM Elements'.

- Event Handlers can be done by referring to an outside function or inline. It tends to be cleaner to refer to an outside function, though.

```
const addOne = () => {
    console.log('addOne() fired')
}

<button onClick={addOne}>+1</button>
<button onClick={() => { console.log('subtractOne fired') }}>-1</button>
```

## 3.16 - Manual Data Binding
- JSX does not have built-in data binding. All the data used inside JSX happens at the time the code runs, so re-rending is needed to update info on the screen.

## 3.17 - Arrays in JSX
- JSX supports Arrays, strings and numbers. It does not work with Objects. It ignores booleans, null and undefined.

- You can also have arrays of JSX

- When rendering an array, each item needs a unique key property for React to be able to grab onto for re-rendering purposes.