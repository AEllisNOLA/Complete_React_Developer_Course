import React from 'react'

import AddOption from './AddOption'
import Header from './Header'
import Action from './Action'
import Options from './Options'
import OptionModal from './OptionModal'

class IndecisionApp extends React.Component {
    state = {
        options: [],
        selectedOption: undefined
    }
    handleClearSelectedOption = () => {
        this.setState(() => ({ selectedOption: undefined }))
    }
    handleAddOption = (option) => {
        if (!option) {
            return 'Error: Enter valid value to add item.'
        } else if (
            this.state.options.indexOf(option) > -1) {
            return 'Error: This option already exists'
        }

        this.setState((prevState) => ({ options: prevState.options.concat(option) }))
    }

    handleDeleteOptions = () => {
        this.setState(() => ({ options: [] }))
    }

    handlePick = () => {
        const randomNum = Math.floor(Math.random() * this.state.options.length)
        const option = this.state.options[randomNum]
        this.setState(() => ({ selectedOption: option }))
    }

    handleDeleteOption = (optionToRemove) => {
        this.setState((prevState) => {
            return {
                options: prevState.options.filter((option) => {
                    return optionToRemove !== option
                })
            }
        })
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


    render() {
        const subtitle = 'For When Decisions are Hard!'

        return (
            <div>
                <Header subtitle={subtitle} />
                <div className='container'>
                    <Action
                        handlePick={this.handlePick}
                        hasOptions={this.state.options.length > 0}
                    />
                    <div className='widget'>
                        <Options
                            handleDeleteOptions={this.handleDeleteOptions}
                            options={this.state.options}
                            handleDeleteOption={this.handleDeleteOption}
                        />
                        <AddOption handleAddOption={this.handleAddOption} />
                    </div>



                </div>

                <OptionModal
                    selectedOption={this.state.selectedOption}
                    handleClearSelectedOption={this.handleClearSelectedOption}
                />
            </div>
        )
    }
}

export default IndecisionApp;