import React from 'react'
import PersonItem from './PersonItem'

const PersonsList = ({persons, filter, onDeleteClick}) => (
    <>
        {persons.filter(
            (person) => person.name.toLowerCase().includes(filter.toLowerCase())
        ).map(
            person => <PersonItem key={person.id} name={person.name} number={person.number}
                                  onDeleteClick={() => onDeleteClick(person.id)}/>
        )}
    </>
)

export default PersonsList
