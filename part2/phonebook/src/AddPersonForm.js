import React from 'react'

const AddPersonForm = ({name, number, onNameChange, onNumberChange, onSubmit}) => (
    <form onSubmit={onSubmit}>
        <div>
            name: <input onChange={(event) => onNameChange(event.target.value)}
                         value={name}/>
        </div>
        <div>number: <input onChange={(event) => onNumberChange(event.target.value)}
                            value={number}/></div>
        <div>
            <button type="submit">add</button>
        </div>
    </form>
)

export default AddPersonForm
