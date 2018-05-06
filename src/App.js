import React, { Component } from 'react';
import './App.css';
import Person from './Component/Person/Person';

class App extends Component {

  state = {
    persons: [
      { name: 'max', age: 28},
      { name: 'max2', age: 24},
      { name: 'max3', age: 25}
    ],
    otherState: 'sondasodn',
    showPersons: false
  }

  

  nameChangeHandler = (event) => {
    this.setState( {
      persons: [
        { name: 'newName', age: 28},
        { name: event.target.value, age: 24},
        { name: 'max3', age: 25}
      ]
    } ) 
  }

  deletePersonHandler = (personIndex) => {
    const persons = this.state.persons;
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
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div >
          {this.state.persons.map((person, index) => {
            return <Person 
            click={()=>this.deletePersonHandler(index)} /* this.dsd.bind(this.asd) pengganti*/
            name={person.name} 
            age={person.age}/>
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
    }

    return (
      <div className="App">
        <h1>Tes</h1>
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
