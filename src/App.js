import React from 'react';

//Simple String
//const el=<h1>Hello Divya</h1>

//Math Expresion
//const el=<h1>{10+20}</h1>

//Variable
// const name = 'Bhavaya'
// const el = <h1>Hello {name}</h1>

//function
// const show =()=>{
//     return 'Hello Divya'
// }

// const el = <h1>{show()}</h1>


//Property
let user = {

    firstname:'Divya'
}

const el = <h1>Hello {user.firstname}</h1>

 export default el;