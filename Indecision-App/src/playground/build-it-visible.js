class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props)
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this)
        this.state = {
            visibility: false
        }
    }

    handleToggleVisibility() {
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            }
        })
    }

    render() {
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.handleToggleVisibility}>
                    {this.state.visibility ? 'Show Details' : 'Hide Details'}
                </button>
              
                {!this.state.visibility && <p>Details</p>}

            </div>
        )
    }

}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'))



/* let hidden = true

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
*/
