// The following code is from sections 1-3 and part of 4.
// They were a pre-components look at React.
// Starting with 4.26, we get into components and are starting with a clean slate.

const app = {
    title: 'Decisioner',
    subtitle: 'For When Decisions are Hard',
    options: []
}


// Numbers Example
const numbers = [55, 101, 1000]

// Decisioner App
const onFormSubmit = (e) => {
    e.preventDefault()
    // forms have access to an elements object
    const option = e.target.elements.option.value

    if (option) {
        app.options.push(e.target.elements.option.value)
        e.target.elements.option.value = ''
        render()
    }
}

const onRemoveAll = () => {
    app.options = []
    render()
}

const makeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length)
    const option = app.options[randomNum]
    alert(option)
}

const render = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <h2>{app.subtitle}</h2>}
            <p>{app.options.length > 0 ? 'Here are your options: ' : 'No options.'}</p>
            <button disabled={app.options.length === 0} onClick={makeDecision}>What Should I Do?!?</button>
            <button onClick={onRemoveAll}>Remove All</button>

            {/* Numbers example. Can remove later.*/}
            {numbers.map((number) => <p key={number}>Number: {number}</p>)}

            {/* App options listed out*/}
            <ol>
                {app.options.map((option) => <li key={option}>{option}</li>)}
            </ol>

            <form onSubmit={onFormSubmit}>
                <input type='text' name='option'></input>
                <button>Add Option</button>
            </form>
        </div>
    )
    ReactDOM.render(template, appRoot)
}

const appRoot = document.getElementById('app')
render()
