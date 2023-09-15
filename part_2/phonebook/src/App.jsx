import { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import PersonService from './services/persons'

const App = () => {

  const [newFilter, setNewFilter] = useState('')
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const [persons, setPersons] = useState([]) 

  useEffect(() => {
    PersonService
      .getAll()
        .then(initialPersons => {
        setPersons(initialPersons)
        setPersonsToShow(initialPersons)
      })
  }, [])

  let [personsToShow, setPersonsToShow] = useState(persons)

  return (

    <div>

      <h2>Phonebook</h2>

      <Filter newFilter={newFilter} setNewFilter={setNewFilter} persons={persons} personsToShow={personsToShow} setPersonsToShow={setPersonsToShow}  />

      <h2>add a new</h2>

      <PersonForm newName={newName} newNumber={newNumber} setNewName={setNewName} setNewNumber={setNewNumber} persons={persons} setPersons={setPersons} setPersonsToShow={setPersonsToShow}/>

      <h2>Numbers</h2>

      <Persons personsToShow={personsToShow} setPersonsToShow={setPersonsToShow} />

    </div>
  )
}

export default App
