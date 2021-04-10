import React from 'react'

const Country = ({country}) => (
    <>
        <h1>{country.name}</h1>
        capital {country.capital}<br/>
        population {country.population}

        <h2>languages</h2>
        <ul>
            {country.languages.map(language => <li key={language.name}>{language.name}</li>)}
        </ul>
        <img src={country.flag} alt={`flag of ${country.name}`}
             style={{maxHeight: 200, maxWidth: 300}}/>
    </>
)

export default Country
