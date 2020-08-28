import React, {Component } from 'react'

class Student extends Component{
    state={
        name:"Rahul",
        roll:this.props.roll  // here we are doing in this way because props value cannot be changed so we first
                              // pass it to the state then we change the value
    };

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

