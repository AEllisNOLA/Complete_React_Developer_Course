class IndecisionApp extends React.Component {
    constructor(props) {
        super(props)

        this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
        this.handlePick = this.handlePick.bind(this)
        this.handleAddOption = this.handleAddOption.bind(this)
        this.handleDeleteOption = this.handleDeleteOption.bind(this)

        this.state = {
            options: []
        }
    }

    componentDidMount() {
        try {
            const json = localStorage.getItem('options')
            const options = JSON.parse(json)

            if (options) {
                this.setState(() => ({ options }))
            }
        } catch (error) {
            // do nothing
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options)
            localStorage.setItem('options', json)
        }

    }


    handleAddOption(option) {
        if (!option) {
            return 'Error: Enter valid value to add item.'
        } else if (
            this.state.options.indexOf(option) > -1) {
            return 'Error: This option already exists'
        }

        this.setState((prevState) => ({ options: prevState.options.concat(option) }))
    }

    handleDeleteOptions() {
        this.setState(() => ({ options: [] }))
    }

    handlePick() {
        const randomNum = Math.floor(Math.random() * this.state.options.length)
        const option = this.state.options[randomNum]
        alert(option)
    }
    handleDeleteOption(optionToRemove) {

        this.setState((prevState) => {
            return {
                options: prevState.options.filter((option) => {
                    return optionToRemove !== option
                })
            }

        })
    }

    render() {
        const subtitle = 'For When Decisions are Hard!'

        return (
            <div>
                <Header subtitle={subtitle} />
                <Action
                    handlePick={this.handlePick}
                    hasOptions={this.state.options.length > 0}
                />
                <Options
                    handleDeleteOptions={this.handleDeleteOptions}
                    options={this.state.options}
                    handleDeleteOption={this.handleDeleteOption}
                />
                <AddOption handleAddOption={this.handleAddOption} />
            </div>
        )
    }
}

const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            {props.subtitle && <h2>{props.subtitle}</h2>}
        </div>
    )
}

Header.defaultProps = {
    title: 'Decisioner!',
}

const Action = (props) => {
    return (
        <div>
            <button
                onClick={props.handlePick}
                disabled={!props.hasOptions}>What Should I Do?!?
            </button>
        </div>
    )
}


const Options = (props) => {
    return (
        <div>
            <button onClick={props.handleDeleteOptions}>Remove All</button>

            {props.options.length === 0 && <p>Please add option to get started.</p>}

            <div>{props.options.map((option) =>

                <Option
                    key={option}
                    optionText={option}
                    handleDeleteOption={props.handleDeleteOption}
                />
            )}

            </div>
        </div>
    )
}

class AddOption extends React.Component {
    constructor(props) {
        super(props)
        this.handleAddOption = this.handleAddOption.bind(this)
        this.state = {
            error: undefined
        }
    }

    handleAddOption(e) {
        e.preventDefault()

        const option = e.target.elements.option.value.trim()
        const error = this.props.handleAddOption(option)

        this.setState(() => ({ error }))

        if (!error) {
            e.target.elements.option.value = ''
        }


    }

    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type='text' name='option'></input>
                    <button>Add Option</button>
                </form>
            </div>
        )
    }
}

const Option = (props) => {
    return (
        <div>
            <p>Option: {props.optionText}</p>
            <button
                onClick={((e) => props.handleDeleteOption(props.optionText))}>
                Remove
            </button>
        </div>
    )
}


ReactDOM.render(<IndecisionApp />, document.getElementById('app'))