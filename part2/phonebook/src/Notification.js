import React from 'react'

const Notification = ({message}) => (
    message && <div className="success">
        {message}
    </div>
)

export default Notification
