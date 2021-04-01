import React, {useState} from 'react'
import Filter from './Filter'
import AddPersonForm from "./AddPersonForm";
import PersonsList from "./PersonsList";

const App = () => {
    const [persons, setPersons] = useState([
        {name: 'Arto Hellas', number: '040-123456'},
        {name: 'Ada Lovelace', number: '39-44-5323523'},
        {name: 'Dan Abramov', number: '12-43-234345'},
        {name: 'Mary Poppendieck', number: '39-23-6423122'}
    ])
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
    const [filter, setFilter] = useState('')

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
