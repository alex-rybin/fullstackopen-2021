import React, {useEffect, useState} from 'react'
import Filter from './Filter'
import AddPersonForm from './AddPersonForm'
import PersonsList from './PersonsList'
import contactsService from './services/contacts'
import Notification from "./Notification";

const App = () => {
    const [persons, setPersons] = useState([])
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
    const [filter, setFilter] = useState('')
    const [notification, setNotification] = useState(null)
    const [notificationType, setNotificationType] = useState('success')

    useEffect(() => {
        contactsService.getAll().then(response => {
            setPersons(response)
        })
    }, [])

    const showNotification = (message, type) => {
        setNotificationType(type)
        setNotification(message)
        setTimeout(() => setNotification(null), 5000)
    }

    const addNewName = event => {
        event.preventDefault()

        const currentContact = persons.find(person => person.name === newName)

        if (currentContact) {
            if (window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) {
                contactsService.update(currentContact.id, {
                    name: newName,
                    number: newNumber
                }).then(response => {
                    setPersons(persons.filter(person => person.id !== currentContact.id).concat(response))
                    showNotification(`Updated phone number for ${newName}`, 'success')
                    setNewName('')
                    setNewNumber('')
                }).catch(error => {
                    showNotification(error.response.data.error, 'error')
                })
            }
        } else {
            contactsService.create({
                name: newName,
                number: newNumber
            }).then(response => {
                setPersons(persons.concat(response))
                showNotification(`Added ${newName}`, 'success')
                setNewName('')
                setNewNumber('')
            }).catch(error => {
                showNotification(error.response.data.error, 'error')
            })
        }
    }

    const deleteContact = contactId => {
        const contactName = persons.find(person => person.id === contactId).name
        if (window.confirm(`Delete ${contactName}?`)) {
            contactsService.deleteContact(contactId)
                .then(() => {
                    setPersons(persons.filter(person => person.id !== contactId))
                    showNotification(`Deleted ${contactName}`, 'success')
                })
                .catch(() => {
                    showNotification(`Information of ${contactName} has already been removed from server`, 'error')
                })
        }
    }

    return (
        <div>
            <h2>Phonebook</h2>
            <Notification message={notification} type={notificationType}/>
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
