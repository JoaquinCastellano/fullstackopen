import { useState, useEffect } from 'react'
import countrieService from './services/countries'
import Filter from './components/Filter'
import Country from './components/Country'

function App() {

  const [countries, setCountries] = useState([])
  const [countriesToShow, setCountriesToShow] = useState([])                          
  const [newFilter, setNewFilter] = useState('')

  useEffect(() => {
    countrieService
      .getAll()
      .then(initialCountries => {
        setCountries(initialCountries)
        setCountriesToShow(initialCountries)
      })
  }, [])

  if(countries.length === 0 ){

    return(

      <h1>Loading countries</h1>

    )

  } 

  return(
    <div>

    <Filter newFilter={newFilter} setNewFilter={setNewFilter} countries={countries} setCountriesToShow={setCountriesToShow} />
    <Country countriesToShow={countriesToShow} setCountriesToShow={setCountriesToShow} />

    </div>
  )

}

export default App
