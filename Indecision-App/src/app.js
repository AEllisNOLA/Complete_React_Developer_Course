class IndecisionApp extends React.Component {
    render() {
        const title = 'Decisioner!'
        const subtitle = 'For When Decisions are Hard!'
        const options = ['Option 1', 'Option 2', 'Option 3']

        return (
            <div>
                <Header title={title} subtitle={subtitle} />
                <Action />
                <Options options={options} />
                <AddOption />
            </div>
        )
    }
}

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        )
    }
}

class Action extends React.Component {
    handlePick() {
        console.log('handlePick fired')
    }
    render() {
        return (
            <div>
                <button onClick={this.handlePick}>What Should I Do?!?</button>
            </div>
        )
    }
}

class Options extends React.Component {
    constructor(props) {
        super(props)
        this.handleRemoveAll = this.handleRemoveAll.bind(this)
    }

    handleRemoveAll() {
        console.log(this.props.options)
    }
    
    render() {
        return (
            <div>
                <div>{this.props.options.map((option) => <Option key={option} optionText={option} />)}</div>
                <button onClick={this.handleRemoveAll}>Remove All</button>
            </div>
        )
    }
}

class AddOption extends React.Component {
    handleAddOption(e) {
        e.preventDefault()
        
        const option = e.target.elements.option.value.trim()
        if (option) {
            console.log(option)
        }

        e.target.elements.option.value = ''
        

   
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleAddOption}>
                    <input type='text' name='option'></input>
                    <button>Add Option</button>
                </form>
            </div>
        )
    }
}

class Option extends React.Component {
    render() {
        return (
            <div>
                <p>Option: {this.props.optionText}</p>
            </div>
        )
    }
}


ReactDOM.render(<IndecisionApp />, document.getElementById('app'))