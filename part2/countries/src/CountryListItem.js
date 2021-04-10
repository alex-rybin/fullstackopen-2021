import React, {useState} from 'react'

import Country from './Country'

const CountryListItem = ({country}) => {
    const [showCountry, setShowCountry] = useState(false)

    return (
        <>
            {country.name}
            <button onClick={() => setShowCountry(!showCountry)}>show</button>
            <br/>
            {showCountry && <><Country country={country}/><br/></>}
        </>
    )
}

export default CountryListItem
