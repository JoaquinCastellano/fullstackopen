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
  
  const addPerson = (event) => {
  
    event.preventDefault()
    
    const personObject = {
      name: newName
    }
  
    setPersons(persons.concat(personObject))
    setNewName('')
  
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
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
