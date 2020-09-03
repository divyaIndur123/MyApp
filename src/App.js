import React, { useState } from 'react';
import Person from './Person/Person';

const App = props => {
   
    const [personState, setPersonState] = useState({
        persons: [
        { name: 'Divya',age: 28},
        { name: 'priya',age: 29},
        { name: 'Bhavya',age: 25}
    ]
   });

   const switchNameHandler = () =>{
    //console.log('was clicked');
    //this.state.persons[0].name = 'Being Human';// cannot update in this way
    setPersonState({
        persons: [
        { name: 'Diya',age: 28},
        { name: 'priya',age: 29},
        { name: 'Bhavya',age: 25}
    ]
});
};
   
        return(
            <div className="App">
            <h1>Hello Event</h1>
            <p>its working</p>
            <button onClick={switchNameHandler}>Switch name</button>
            <Person name={personState.persons[0].name}/>
            <Person name={personState.persons[1].name}/>
            <Person name={personState.persons[2].name}/>
            
            </div>
        );
    
}

export default App;



