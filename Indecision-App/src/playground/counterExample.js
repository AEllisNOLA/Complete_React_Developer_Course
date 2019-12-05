// COUNTER EXAMPLE

// POST-STATE COUNTER


/* 
- Step 1: Create default set of values (as an object), such as 0 or an empty array. 

- Step 2: Component goes through its inital render using the default values.

- Step 3: The component's state changes based on an event such as a network request or user event.

- Step 4: The app then re-renders, using the new state values and bringing the UI to match the state.

- The last step is to start again at step 3.
*/
class Counter extends React.Component {
    constructor(props) {
        super(props)
        this.handleAddOne = this.handleAddOne.bind(this)
        this.handleMinusOne = this.handleMinusOne.bind(this)
        this.handleReset = this.handleReset.bind(this)

        this.state = {
            count: 0
        }
    }

    render() {
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>Reset</button>
            </div>
        )
    }


    handleAddOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            }
        })
    }

    handleMinusOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count - 1
            }
        })
        
    }

    handleReset() {
        this.setState(() => {
            return {
                count: 0
            }
        })
    }


}



ReactDOM.render(<Counter />, document.getElementById('app'))


// PRE-STATE COUNTER
/*
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
*/