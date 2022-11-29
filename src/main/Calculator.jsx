import React, { Component } from 'react'
import './Calculator.css'
import Button from '../components/Button'
import Display from '../components/Display'

const initialState = {
    displayValue: '0',
    clearDisplay: false,
    operation:null,
    values: [0, 0],
    current: 0
}

export default class Calculator extends Component {
    
    state = { ...initialState}

    constructor(props) {
        super(props)

        this.clearMemory = this.clearMemory.bind(this)
        this.setOperation = this.setOperation.bind(this)
        this.addDigit = this.addDigit.bind(this)
    }

    clearMemory() {
        this.setState({ ...initialState })
    }

    setOperation(operation) {
        if (this.state.current === 0) {
            this.setState({ operation, current: 1, clearDisplay: true })
        }
    }

    addDigit (n) {
        if (n === '.' && this.state.displayValue.includes('.')) {
            return 
        }

        const clearDisplay = this.state.displayValue === '0'
            || this.state.clearDisplay
        const currentValue = clearDisplay ? '' : this.state.displayValue
        const displayValue = currentValue + n
        this.setState({ displayValue, clearDisplay: false})
        
        if (n !== '.') {
            const i = this.state.current
            const newValue = parseFloat(displayValue)
            const values = [...this.state.values]
            values[i] = newValue
            this.setState({ values })
            console.log(values);
        }
    }
 
    render(){
        return (
            <div className="calculator">
                <Display value={this.state.displayValue}/>
                <Button Label="AC" click={this.clearMemory} triple/>
                <Button Label="/" click={this.setOperation} operation/>
                <Button Label="7" click={this.addDigit}/>
                <Button Label="8" click={this.addDigit}/>
                <Button Label="9" click={this.addDigit}/>
                <Button Label="*" click={this.setOperation} operation/>
                <Button Label="4" click={this.addDigit}/>
                <Button Label="5" click={this.addDigit}/>
                <Button Label="6" click={this.addDigit}/>
                <Button Label="-" click={this.setOperation} operation/>
                <Button Label="1" click={this.addDigit}/>
                <Button Label="2" click={this.addDigit}/>
                <Button Label="3" click={this.addDigit}/>
                <Button Label="+" click={this.setOperation} operation/>
                <Button Label="0" click={this.addDigit} double/>
                <Button Label="." click={this.addDigit}/>
                <Button Label="=" click={this.setOperation} operation/>


            </div>
        )
    }
}