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

const render = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <h2>{app.subtitle}</h2>}
            <p>{app.options.length > 0 ? 'Here are your options: ' : 'No options.'}</p>
            <p>{app.options.length}</p>
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
