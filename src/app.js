import React from 'react'
import ReactDOM from 'react-dom'

import IndecisionApp from './components/IndecisionApp'

ReactDOM.render(<IndecisionApp />, document.getElementById('app'))

/*
class OldSyntax {
    constructor() {
        this.name = 'Anthony'
    }
    getGreeting() {
        return `Hello, my name is ${this.name}`
    }
}

const OldSyntaxEx = new OldSyntax();
console.log(OldSyntaxEx.getGreeting())

class NewSyntax {
    name = 'Josh'
    getGreeting = () => {
        return `Hello, my name is ${this.name}`
    }
}

const newSyntaxEx = new NewSyntax();
const newSyntaxGetGreeting = newSyntaxEx.getGreeting
console.log(newSyntaxGetGreeting())
*/