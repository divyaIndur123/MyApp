import React from 'react';
import ReactDOM from 'react-dom';
import Student from './App';

//  warning in console because name should be string as we have specified the prop-type same for roll as well
// ReactDOM.render(<Student name={678} roll="101"/>,document.getElementById('root'));

ReactDOM.render(<Student name="Divya" roll={678}/>,document.getElementById('root'));