import React, {useEffect, useState} from 'react'
import Filter from './Filter'
import AddPersonForm from "./AddPersonForm";
import PersonsList from "./PersonsList";
import axios from "axios";

const App = () => {
    const [persons, setPersons] = useState([])
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
    const [filter, setFilter] = useState('')

    useEffect(() => {
        axios.get('http://localhost:3001/persons/').then(response => {
            setPersons(response.data)
        })
    }, [])

    const addNewName = event => {
        event.preventDefault()

        if (persons.map(person => person.name).includes(newName)) {
            alert(`${newName} is already added to phonebook`)
        } else {
            setPersons(persons.concat({name: newName, number: newNumber}))
            setNewName('')
            setNewNumber('')
        }
    }

    return (
        <div>
            <h2>Phonebook</h2>
            <Filter value={filter} onChange={setFilter}/>
            <h2>Add new</h2>
            <AddPersonForm name={newName} number={newNumber}
                           onNameChange={setNewName}
                           onNumberChange={setNewNumber}
                           onSubmit={addNewName}/>
            <h2>Numbers</h2>
            <PersonsList filter={filter} persons={persons}/>
        </div>
    )
}

export default App
