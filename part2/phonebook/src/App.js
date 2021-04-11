import React, {useEffect, useState} from 'react'
import Filter from './Filter'
import AddPersonForm from './AddPersonForm'
import PersonsList from './PersonsList'
import contactsService from './services/contacts'

const App = () => {
    const [persons, setPersons] = useState([])
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
    const [filter, setFilter] = useState('')

    useEffect(() => {
        contactsService.getAll().then(response => {
            setPersons(response)
        })
    }, [])

    const addNewName = event => {
        event.preventDefault()

        const currentContact = persons.find(person => person.name === newName)

        if (currentContact) {
            if (window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) {
                contactsService.update(currentContact.id, {
                    name: newName,
                    number: newNumber
                }).then((response) => {
                    setPersons(persons.filter(person => person.id !== currentContact.id).concat(response))
                    setNewName('')
                    setNewNumber('')
                })
            }
        } else {
            contactsService.create({
                name: newName,
                number: newNumber
            }).then((response) => {
                setPersons(persons.concat(response))
                setNewName('')
                setNewNumber('')
            })
        }
    }

    const deleteContact = contactId => {
        const contactName = persons.find(person => person.id === contactId).name
        if (window.confirm(`Delete ${contactName}?`)) {
            contactsService.deleteContact(contactId)
                .then(setPersons(persons.filter(person => person.id !== contactId)))
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
            <PersonsList filter={filter} persons={persons} onDeleteClick={deleteContact}/>
        </div>
    )
}

export default App
