const Filter = ({newFilter, setNewFilter, countries, setCountriesToShow}) => {
    
    const handleNewFilter = (event) => {

        setNewFilter(event.target.value)

        if(event.target.value.trim().length === 0){
    
          setCountriesToShow(countries)
    
        } else {
    
          const newCountriesToShow = countries.filter(function(country){
    
            return country.name.common.toLowerCase().includes(event.target.value.toLowerCase())
    
          })

          setCountriesToShow(newCountriesToShow)
    
        }
    
      }
              
    return (
      <div>
        find countries<input value={newFilter} onChange={handleNewFilter}/>
      </div>
    )
  }
  
  export default Filter