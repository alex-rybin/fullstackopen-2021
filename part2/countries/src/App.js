import React, {useEffect, useState} from 'react'
import Country from './Country'
import axios from "axios";

const App = () => {
    const [filteredCountries, setFilteredCountries] = useState([])
    const [countries, setCountries] = useState([])

    useEffect(() => {
        axios
            .get(`https://restcountries.eu/rest/v2/all/`)
            .then(response => setCountries(response.data))
    }, [])

    return (
        <>
            find countries <input
            onChange={(event) => setFilteredCountries(
                countries.filter(
                    country => country.name.toLowerCase().includes(event.target.value)
                ))}/>
            <br/>

            {filteredCountries.length > 10 ? 'Too many matches, specify another filter'
                : filteredCountries.length === 1 ? <Country country={filteredCountries[0]}/>
                    : filteredCountries.map(country => <div
                        key={country.name}>{country.name}</div>)}
        </>
    )
}

export default App
