import React, {useState} from 'react'

import CountryData from './CountryData'

const CountryListItem = ({country}) => {
    const [showCountry, setShowCountry] = useState(false)

    return (
        <>
            {country.name}
            <button onClick={() => setShowCountry(!showCountry)}>show</button>
            <br/>
            {showCountry && <><CountryData country={country}/><br/></>}
        </>
    )
}

export default CountryListItem
