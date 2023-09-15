const Filter = ({newFilter, setNewFilter, persons, personsToShow, setPersonsToShow}) => {
    
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
    
    return (
      <div>
        filter shown with<input value={newFilter} onChange={handleNewFilter}/>
      </div>
    )
  }
  
  export default Filter