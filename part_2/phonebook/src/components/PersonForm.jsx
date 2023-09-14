import axios from 'axios'


const PersonForm = ({newName, newNumber, setNewName, setNewNumber, persons, setPersons,setPersonsToShow}) => {

    const handleNewName = (event) => {

        setNewName(event.target.value)
    
      }
    
      const handleNewNumber = (event) => {
    
        setNewNumber(event.target.value)
    
      }
    
      const addPerson = () => {
    
        const personObject = {
          name: newName,
          number: newNumber
        }

        axios.post("http://192.168.27.251:3001/persons", personObject)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson.data))
          setPersonsToShow(persons.concat(returnedPerson.data))
          setNewName('')
          setNewNumber('')
        })
              
      }
      
      const checkPerson = (event) => {
    
        event.preventDefault()
        const checkPersonExists = obj => obj.name === newName;
    
        newName.trim().length === 0 || newNumber.trim().length === 0 ? alert("Please complete all fields") : persons.some(checkPersonExists) ? 
                                                                                      alert(newName + " is already added to phonebook") : addPerson(event)      
      }
    
    
    return (
    <form onSubmit={checkPerson}>
        <div>
          name: <input value={newName} onChange={handleNewName}/>
        </div>
        <div>number: <input value={newNumber} onChange={handleNewNumber}/></div>
        <div>
          <button type="submit">add</button>
        </div>
    </form>
    )
}

export default PersonForm