import axios from 'axios'

const baseUrl = 'http://localhost:3001/persons/'

const getAll = () => {
    return axios.get(baseUrl).then(response => response.data)
}

const create = newContact => {
    return axios.post(baseUrl, newContact).then(response => response.data)
}

const deleteContact = contactId => {
    return axios.delete(`${baseUrl}${contactId}/`).then(response => response.data)
}

const update = (contactId, newData) => {
    return axios.put(`${baseUrl}${contactId}/`, newData).then(response => response.data)
}

const service = {
    getAll,
    create,
    deleteContact,
    update,
}

export default service
