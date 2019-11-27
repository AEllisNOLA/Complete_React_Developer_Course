const app = {
    title: 'Decisioner',
    subtitle: 'For When Decisions are Hard',
    options: ['Option 1', 'Option 2']
}

const template = (
    <div>
        <h1>{app.title}</h1>
        {app.subtitle && <h2>{app.subtitle}</h2>}
        <p>{app.options.length > 0 ? 'Here are your options: ' : 'No options.'}</p>
    </div>
)

// COUNTER EXAMPLE
let count = 0

const addOne = () => {
    count++
    renderCounterApp()
}

const minusOne = () => {
    count--
    renderCounterApp()
}

const resetCounter = () => {
    count = 0
    renderCounterApp()
}


const appRoot = document.getElementById('app')


const counterTemplate = (
    <div>
        <h1>Current Count: {count}</h1>
        <button onClick={addOne}>+1</button>
        <button onClick={minusOne}>-1</button>
        <button onClick={resetCounter}>Reset</button>
    </div>
)




const renderCounterApp = () => {
    const counterTemplate = (
        <div>
            <h1>Current Count: {count}</h1>
            <button onClick={addOne}>+1</button>
            <button onClick={minusOne}>-1</button>
            <button onClick={resetCounter}>Reset</button>
        </div>
    )

    ReactDOM.render(counterTemplate, appRoot)

}

renderCounterApp()
// USER EXAMPLE
/*
const user = {
    name: 'Anthony',
    age: 15,
    location: 'Baton Rouge, LA'
}

function getLocation(location) {
    if (location) {
        return <p>Location: {location}</p>
    }
}

const userInfo = (
    <div>
        <h1>{user.name ? user.name : 'Anonymous'}</h1>
        {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
        {getLocation(user.location)}
    </div>
)
*/
