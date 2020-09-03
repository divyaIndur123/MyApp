import React, { Component } from 'react';
import Person from './Person/Person';

class App extends Component{

    state = {
        person: [
            {name: 'Divya',age: 25},
            {name: 'Priya',age: 27},
            {name: 'kriya',age: 24}],

        otherProperty: 'somevalue'
    }

    updateNamesHandler = () => {
        //console.log(this); // note: if orginal stste has more than onevalue than other state get merged untouched
        this.setState({
            person: [
                {name: 'Diya',age: 25},
                {name: 'Piya',age: 27},
                {name: 'riya',age: 24}]

        });
    }
    render(){
        return(
            <div>
                <Person name = {this.state.person[0].name} age = {this.state.person[0].age}/>
                <Person name = {this.state.person[1].name} age = {this.state.person[1].age}/>
                <Person name = {this.state.person[2].name} age = {this.state.person[2].age}/>
                <button onClick = {this.updateNamesHandler} >Update-Names</button>
            </div>
        );
    }

}
export default App;



