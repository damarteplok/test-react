import React from 'react';
import './Person.css';

const person = (props) => {

    return (
        <div className="Person">
        <p onClick={props.click}>asdsadads {props.name} and im {props.age}  {Math.floor(Math.random() * 30 )} yo</p>
        <p>{props.children}</p>
        <input type="text" onChange={props.changed}/>
        </div>
        
    );
}
export default person;