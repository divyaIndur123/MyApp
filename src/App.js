import React, { Component } from 'react';
import PropTypes from 'prop-types'; //PropTypes or you can give which we want likt pt ot propsT
class Student extends Component{
    render(){
        return(
            <div>
                <h1>Hello {this.props.name}</h1>
                <h1>your rollno is  {this.props.roll}</h1>
            </div>
        );
    }
}

Student.propTypes={                         //here propTypes has to be same
    name:PropTypes.string.isRequired,       // this is what we written in import here i have writen PropTypes if we write pt then
    roll : PropTypes.number                 // pt.number and isRequired makes it compulsory for value
};
export default Student;

// isRequired not given and no value is given to the props.name then 
//react doest shows any error so to get the warning in console if we miss to specify the value