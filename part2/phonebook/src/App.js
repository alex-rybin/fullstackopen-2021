import React, {useState} from 'react'

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
            filter shown with <input onChange={(event => setFilter(event.target.value))}
                                     value={filter}/>
            <h2>Add new</h2>
            <form onSubmit={addNewName}>
                <div>
                    name: <input onChange={(event) => setNewName(event.target.value)}
                                 value={newName}/>
                </div>
                <div>number: <input onChange={(event) => setNewNumber(event.target.value)}
                                    value={newNumber}/></div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
            <h2>Numbers</h2>
            {persons.filter(
                (person) => person.name.toLowerCase().includes(filter.toLowerCase())
            ).map(
                person => <div key={person.name}>{person.name} {person.number}</div>
            )}
        </div>
    )
}

export default App
