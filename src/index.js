import React from 'react';
import ReactDOM from 'react-dom';
import Student from './App';

//  warning in console because name should be string as we have specified the prop-type same for roll as well
// ReactDOM.render(<Student name={678} roll="101"/>,document.getElementById('root'));

// isRequired will solve this problem by giving warning in console.
//ReactDOM.render(<Student name roll={678}/>,document.getElementById('root'));

// defaultProps will give the default value in these case
ReactDOM.render(<Student roll={101}/>,document.getElementById('root'));

