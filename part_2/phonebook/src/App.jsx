import { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {

  const [newFilter, setNewFilter] = useState('')
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const [persons, setPersons] = useState([]) 

  useEffect(() => {
    console.log('effect')
    axios
      .get('http://192.168.27.251:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
        setPersonsToShow(response.data)
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

      <Persons personsToShow={personsToShow} />

    </div>
  )
}

export default App
