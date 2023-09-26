const Country = ({countriesToShow}) => {

    let x = countriesToShow.length

    if(x > 10){

        return <p>Too many matches ({x}), specify another filter</p>

    }

    if(x > 1 && x <= 10){

        return (
            countriesToShow.map(country => {
  
                return (

                    <p key={country.name.common} > {country.name.common} </p>
                )                
            
            })  
        )

    }

    if(x === 1){

        return (

            <div>
                <h1>{countriesToShow[0].name.common}</h1>
                <p>capital {countriesToShow[0].capital} </p>
                <p>area {countriesToShow[0].area} </p>
                <h3>Languages:</h3>
                <ul>
                {Object.values(countriesToShow[0].languages).map(lang => {
  
                    return (

                        <li key={lang} > {lang} </li>
                    
                    )                

                })}
                </ul>

                <img src={countriesToShow[0].flags.png} alt={countriesToShow[0].flags.alt}></img>

            </div>
            
        )

    }

    if(x === 0){

        return <p>No results, specify another filter</p>

    }
      
}

export default Country;