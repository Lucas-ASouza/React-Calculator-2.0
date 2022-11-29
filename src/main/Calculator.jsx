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
    
    constructor(props) {
        super(props)

        this.clearMemory = this.clearMemory.bind(this)
        this.setOperation = this.setOperation.bind(this)
        this.addDigit = this.addDigit.bind(this)
    }

    clearMemory() {
        console.log ('clear')
    }

    setOperation(operation) {
        console.log(operation)
    }

    addDigit (n) {
        console.log(n)
    }
 
    render(){
        return (
            <div className="calculator">
                <Display value={100}/>
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