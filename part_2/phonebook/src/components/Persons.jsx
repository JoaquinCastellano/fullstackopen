import PersonService from '../services/persons'

const Persons = ({ personsToShow, setPersonsToShow}) => {

    const removePerson = (pid, pname) => {

        if (window.confirm("Delete " +  pname  + " ?")) {

            PersonService
            .remove(pid)
            .then(returnedPerson => {})

            setPersonsToShow(personsToShow.filter(p => p.id !== pid))

        }
        
    }

    return (

        personsToShow.map(person => {

                return(
                    
                    <p key={person.name} >{person.name} {person.number}<button onClick={() => removePerson(person.id,person.name)}>delete</button></p>
                    
                )

            }
        
        )    
    )
    
  }
  
  export default Persons
