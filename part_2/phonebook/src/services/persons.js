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

const remove = id => {

    const request = axios.delete(`${baseUrl}/${id}`, )
    return request.then(responseObject => responseObject)

}

const update = (id, obj) => {

    const request = axios.put(`${baseUrl}/${id}`, obj)
    return request.then(responseObject => responseObject.data)

}

export default { getAll, create, remove, update }

