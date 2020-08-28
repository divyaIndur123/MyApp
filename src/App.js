import React, { Component } from 'react';
class Student extends Component{
    render(){
        return(
            <div>
                {/* we have to write the children to acces it */}
                <h1>Hello {this.props.children}</h1> 
                
            </div>
        );
    }
}


export default Student;

