import React, {useEffect, useState} from 'react'
import axios from 'axios'

const Country = ({country}) => {
    const [forecast, setForecast] = useState(null)

    useEffect(() => {
        const apiKey = process.env.REACT_APP_WEATHER_API_KEY
        axios
            .get(`https://api.openweathermap.org/data/2.5/weather?q=${country.capital}&appid=${apiKey}&units=metric`)
            .then(response => setForecast(response.data))
    }, [country.capital])
    return (
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
            <h2>Weather in {country.capital}</h2>
            {forecast && <>
                <b>Temperature: </b> {forecast.main.temp} Celsius<br/>
                {forecast.weather[0].main}<br/>
                <b>Wind: </b> {forecast.wind.speed} m/s
            </>}

        </>
    )
}

export default Country
