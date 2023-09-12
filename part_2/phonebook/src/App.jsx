import { useState } from 'react'

const App = () => {

  const [newName, setNewName] = useState('')

  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 

  const handleNewName = (event) => {

    setNewName(event.target.value)

  }

  const Person = ({ person }) => {

    return (

      <p>{person.name}</p>
    
    )

  }

  const addPerson = () => {

    const personObject = {
      name: newName
    }
  
    setPersons(persons.concat(personObject))
    setNewName('')

  }
  
  const checkPerson = (event) => {

    event.preventDefault()

    const checkPersonExists = obj => obj.name === newName;
    persons.some(checkPersonExists) ? alert(newName + " is already added to phonebook") : addPerson(event)
  
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={checkPerson}>
        <div>
          name: <input value={newName} onChange={handleNewName}/>
        </div>
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
