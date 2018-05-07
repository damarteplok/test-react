// import React from 'react';
// import './Person.css';
// import Radium from 'radium';

// const person = (props) => {

//     const style = {
//         '@media (min-width: 500px)' : {
//             width:'450px'
//         }
//     }

//     return (
//         <div className="Person" style={style}>
//         <p onClick={props.click}>asdsadads {props.name} and im {props.age}  {Math.floor(Math.random() * 30 )} yo</p>
//         <p>{props.children}</p>
//         <input type="text" onChange={props.changed}
//         value={props.name}/>
//         </div>
        
//     );
// }
// export default Radium(person);


import React from 'react';
import './Person.css';


const person = (props) => {



    return (
        <div className="Person">
        <p onClick={props.click}>asdsadads {props.name} and im {props.age}  {Math.floor(Math.random() * 30 )} yo</p>
        <p>{props.children}</p>
        <input type="text" onChange={props.changed}
        value={props.name}/>
        </div>
        
    );
}
export default person;