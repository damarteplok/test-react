import React, { Component } from 'react';
import './App.css';

import Person from './Component/Person/Person';


class App extends Component {

  state = {
    persons: [
      { id:'asd', name: 'max', age: 28},
      { id:'qwew', name: 'max2', age: 24},
      { id:'fsafa', name: 'max3', age: 25}
    ],
    otherState: 'sondasodn',
    showPersons: false
  }

  

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex] //create new obj, and spread
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState( {persons: persons} ); 
  }

  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons;
    const persons = [...this.state.persons]; // add new array  a copy of persons
    persons.splice(personIndex, 1); /* remove one element from array */
    this.setState({
      persons: persons
    });
  }

  togglePersonHandler = () => {
      const doesShow = this.state.showPersons;
      this.setState({
        showPersons: !doesShow
      });
  }

  render() {

    const style = {
      backgroundColor: 'green',
      color:'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      // ':hover': {
      //   backgroundColor: 'lightgreen',
      //   color:'black'
      // }
    }; //inline

    //list
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div >
          {this.state.persons.map((person, index) => {
            return <Person 
            click={()=>this.deletePersonHandler(index)} /* this.dsd.bind(this.asd) pengganti*/
            name={person.name} 
            age={person.age}
            key={person.id}
            changed={(event) => this.nameChangeHandler(event, person.id)}/> //long list very not eficient so we need key
          })}
          {/* <Person 
            name={this.state.persons[0].name} 
            age={this.state.persons[0].age}/>
          <Person 
            name={this.state.persons[1].name} 
            age={this.state.persons[1].age}/>
          <Person 
            name={this.state.persons[2].name} 
            age={this.state.persons[2].age}
            click={this.switchNameHandler.bind(this, 'ereqqr')}
            changed={this.nameChangeHandler}>
            asdsdadnnininin 
          </Person> */}

        </div>
      );
      style.backgroundColor = 'red';
      // style[':hover'] = {
      //   backgroundColor: 'salmon',
      //   color: 'black'
      // }
    }

    //let classes = ['red', 'bold'].join(' '); // "red bold"
    const classes =[];
    if (this.state.persons.length <= 2) {
      classes.push('red'); //clasess = ['red]
    }
    if (this.state.persons.length <=1) {
      classes.push('bold'); //clasess= [bold red]
    }

    return (
     
      <div className="App">
        <h1>Tes</h1>
        <p className={classes.join(' ')}>asdaaaaadasdasd</p>
        <button 
          style={style}
          onClick={ () => this.togglePersonHandler()}>
          Toggle
        </button>

        {/* { this.state.showPersons ? 
        
          <div >

            <Person 
              name={this.state.persons[0].name} 
              age={this.state.persons[0].age}/>
            <Person 
              name={this.state.persons[1].name} 
              age={this.state.persons[1].age}/>
            <Person 
              name={this.state.persons[2].name} 
              age={this.state.persons[2].age}
              click={this.switchNameHandler.bind(this, 'ereqqr')}
              changed={this.nameChangeHandler}>
              asdsdadnnininin 
            </Person>

          </div> : null

        }  */}

          {persons}
          

      </div>
      
    );
  }
}

export default App;
