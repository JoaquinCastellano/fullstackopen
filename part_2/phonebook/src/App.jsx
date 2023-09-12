import { useState } from 'react'

const App = () => {

  const [newFilter, setNewFilter] = useState('')
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 

  let [personsToShow, setPersonsToShow] = useState(persons)

  const handleNewFilter = (event) => {

    setNewFilter(event.target.value)
    
    if(event.target.value.trim().length === 0){

      setPersonsToShow(persons)

    } else {

      personsToShow = persons.filter(function(person){

        return person.name.toLowerCase().includes(event.target.value.toLowerCase())

      })

      setPersonsToShow(personsToShow)

    }

  }

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
    setPersonsToShow(persons.concat(personObject))
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
      <div>
          filter shown with<input value={newFilter} onChange={handleNewFilter}/>
        </div>
      <h2>add a new</h2>
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
      {personsToShow.map(person =>
          <Person key={person.name} person={person} />
        )}
    </div>
  )
}

export default App
