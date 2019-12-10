// Code EyesOnMe Component Here
import React from 'react'

export default class EyesOnMe extends React.Component{
    handleFocusEvent = (event) => {
        console.log('Good!')
    } 

    handleBlurEvent = (event) => {
        console.log('Hey! Eyes on me!')
    }
    render(){
        return <button onFocus={this.handleFocusEvent} onBlur={this.handleBlurEvent}> CLICK MEH!</button>
    }
}