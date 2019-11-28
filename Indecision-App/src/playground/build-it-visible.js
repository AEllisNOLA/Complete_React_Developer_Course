let hidden = true

const toggleView = () => {
    hidden = !hidden
    render()
}

const render = () => {
    const template = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={toggleView}>{hidden ? 'Show Details' : 'Hide Details'}</button>
            {!hidden && <p>Details</p>}
        </div>
    )
    ReactDOM.render(template, document.getElementById('app'))
}

render()