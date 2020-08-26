import React from 'react';
const Student = props =>{
    return(
        <div>
            <h1>Hello {props.name}</h1>
            <h1>your rollno is  {props.roll}</h1>
        </div>
    );
}

export default Student;

