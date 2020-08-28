import React, {Component } from 'react'

class Student extends Component{
    constructor(props){
        super(props);
        this.state={
            name:"Rahul",
            roll:this.props.roll  // this props is from constructor 
        };
    }
   

    render(){

        return(
            <>
        <h1>Hello, {this.state.name}</h1>
        <h1>Hello, {this.state.roll}</h1>
        </>
        );
    }
}

export default Student;

