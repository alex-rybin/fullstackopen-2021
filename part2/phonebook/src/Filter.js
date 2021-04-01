import React from 'react'

const Filter = ({value, onChange}) => (
    <>
        filter shown with <input onChange={(event => onChange(event.target.value))}
                                 value={value}/>
    </>
)

export default Filter
