import axios from 'axios'
const baseUrl = 'http://192.168.27.251:3001/persons'

const getAll = () => {

    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

const create = newObject => {
    const request = axios.post(baseUrl, newObject)
    return request.then(response => response.data)
}

export default { getAll, create }
