import {DETAIL, FILTER_CREATE, FILTER_TEMP, GET_DETAIL, GET_DOG, GET_NAME, GET_TEMPERAMENT, ORDER_NAME, ORDER_W, POST_DOG} from '../actions'

const initialState = {
    allDog: [],
    dog: [],
    dogDetail: [],
    temperament: []
}

const rootReducer = (state= initialState, action) => {
    switch(action.type) {
        case GET_DOG :
            return {
                ...state,
                allDog: action.payload,
                dog: action.payload
            }
        case GET_NAME :
            return {
                ...state,
                dog: action.payload
            }
        case GET_TEMPERAMENT :
            return {
                ...state,
                temperament: action.payload
            }
        case FILTER_CREATE :
            const perro= action.payload === 'all'? state.allDog : action.payload === 'DB'? state.allDog.filter(e => e.createdInDB) : state.allDog.filter(e => !e.createdInDB)
            return {
                ...state,
                dog: perro
            }
        case FILTER_TEMP :
            const temp = action.payload === 'all' ? state.allDog : state.allDog.filter(e => e.temperaments.find( e => e.name === action.payload))
            return {
                ...state,
                dog: temp
            }
        case ORDER_NAME:
            const name= action.payload === 'all'? state.dog : action.payload === 'A'? state.dog.sort((a,b) => {
                if (a.name < b.name) {return -1}
                if (a.name > b.name) {return 1}
                return 0
            }) : state.dog.sort ((a,b) => {
                if(a.name < b.name) { return 1}
                if (a.name > b.name) {return -1}
                return 0
            })
            return{
                ...state,
                dog: name
            }
        case ORDER_W :
            const weight= action.payload === 'all'? state.dog : action.payload === 'asc' ? state.dog.sort((a,b) => {
                if(a.weight < b.weight) { return -1}
                if( a.weight > b.weight) {return 1}
                return 0
            }) : state.dog.sort((a,b) => {
                if(a.weight < b.weight) {return 1}
                if ( a.weight > b.weight) {return -1}
                return 0
            })
            return {
                ...state,
                dog: weight,
            }
        case POST_DOG :
            return {
                ...state,
            }
        case GET_DETAIL :
            return {
                ...state,
                dogDetail: action.payload
            }
        case DETAIL :
            return {
                ...state,
                dogDetail: []
            }
        default: return state
    }
}


export default rootReducer;