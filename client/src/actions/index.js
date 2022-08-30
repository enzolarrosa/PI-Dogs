import axios from 'axios'

export const GET_DOG = 'GET_DOG'
export const GET_NAME = 'GET_NAME'
export const GET_TEMPERAMENT= 'GET_TEMPERAMENT'
export const FILTER_CREATE= 'FILTER_CREATE'
export const FILTER_TEMP= 'FILTER_TEMP'
export const ORDER_NAME = 'ORDER_NAME'
export const ORDER_W = 'ORDER_W'
export const POST_DOG = 'POST_DOG'
export const GET_DETAIL = 'GET_DETAIL'
export const DETAIL = 'DETAIL'


export const getDog = () => {
    return async function (dispatch){
        const info = await axios.get('/dogs')
        return dispatch({
            type: GET_DOG,
            payload: info.data
        })
    }
}

export const getName = (name) => {
    return async function (dispatch){
        const info = await axios.get(`/dogs?name=${name}`)
        return dispatch({
            type: GET_NAME,
            payload: info.data
        })
    }
}

export const getTemp = () => {
    return async function (dispatch) {
        const info = await axios.get('/temperaments')
        return dispatch({
            type: GET_TEMPERAMENT,
            payload: info.data
        })
    }
}

export const filterCreate = (payload) => {
    return ({
        type: FILTER_CREATE,
        payload,
    })
}

export const filterTemp= (payload) => {
    return ({
        type: FILTER_TEMP,
        payload,
    })
}

export const orderName = (payload) => {
    return ({
        type: ORDER_NAME,
        payload,
    })
}

export const orderW= (payload) => {
    return ({
        type: ORDER_W,
        payload,
    })
}

export const postDog= (payload) => {
    return async function () {
        const info = await axios.post('/dogs', payload)
        return info
    }
}

export const getDetail = (id) => {
    return async function (dispatch) {
        const info = await axios.get('/dogs/' + id)
        return dispatch({
            type: GET_DETAIL,
            payload: info.data
        })
    }
}

export const detail = () => {
    return ({
        type: DETAIL,
    })
}