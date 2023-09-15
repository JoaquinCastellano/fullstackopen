
import PersonService from '../services/persons'

const PersonForm = ({newName, newNumber, setNewName, setNewNumber, persons, setPersons,setPersonsToShow,setNotification}) => {

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

        PersonService
        .create(personObject)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson))
          setPersonsToShow(persons.concat(returnedPerson))

          const notificationObject = {
            type: "success",
            message: "Added " + newName
          }

          setNotification(notificationObject);
          setNewName('')
          setNewNumber('')

          setTimeout(() => {
            setNotification({type : null, message : null})
          }, 5000)
        })
              
      }

      const updatePerson = (pid, obj) => {

            PersonService
            .update(pid,obj)
            .then(returnedPerson => {

              setPersons(persons.filter(p => p.id !== pid).concat(returnedPerson))
              setPersonsToShow(persons.filter(p => p.id !== pid).concat(returnedPerson))
    
              const notificationObject = {
                type: "warning",
                message: "Modified " + newName
              }
    
              setNotification(notificationObject);
              setNewName('')
              setNewNumber('')
    
              setTimeout(() => {
                setNotification({type : null, message : null})
              }, 5000)
            })
        
    }
      

      const checkPerson = (event) => {
    
        event.preventDefault()
    
        if(newName.trim().length === 0 || newNumber.trim().length === 0){

          alert("Please complete all fields")

        } else {
          
          const resultArrayA = persons.filter(p => p.name === newName)

          if(resultArrayA.length === 0){

            addPerson()

          } else {
          
            const resultArrayB = persons.filter(p => p.name === newName & p.number === newNumber)

            if(resultArrayB.length === 0){

              if (window.confirm( newName  + " already exist. Update ?")) {

                updatePerson(resultArrayA[0].id, {name:newName, number:newNumber} )

              }


            } else {

              alert(newName + " already exists")

            }            

          }

        }
          
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