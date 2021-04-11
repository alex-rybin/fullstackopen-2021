import React from 'react'

const PersonItem = ({name, number, onDeleteClick}) => (
    <>
        <span key={name}>{name} {number}</span>
        <button onClick={onDeleteClick}>delete</button>
        <br/>
    </>
)

export default PersonItem
