import { useState } from 'react'

const App = () => {

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: "040-1234567" }
  ]) 

  const handleNewName = (event) => {

    setNewName(event.target.value)

  }

  const handleNewNumber = (event) => {

    setNewNumber(event.target.value)

  }

  const Person = ({ person }) => {

    return (

      <p>{person.name} {person.number}</p>
    
    )

  }

  const addPerson = () => {

    const personObject = {
      name: newName,
      number: newNumber
    }
  
    setPersons(persons.concat(personObject))
    setNewName('')
    setNewNumber('')

  }
  
  const checkPerson = (event) => {

    event.preventDefault()
    const checkPersonExists = obj => obj.name === newName;

    newName.trim().length === 0 || newNumber.trim().length === 0 ? alert("Please complete all fields") : persons.some(checkPersonExists) ? 
                                                                                  alert(newName + " is already added to phonebook") : addPerson(event)      
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={checkPerson}>
        <div>
          name: <input value={newName} onChange={handleNewName}/>
        </div>
        <div>number: <input value={newNumber} onChange={handleNewNumber}/></div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(person =>
          <Person key={person.name} person={person} />
        )}
    </div>
  )
}

export default App
