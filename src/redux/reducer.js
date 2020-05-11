
const  initialState = {
    data: [],
    cities: ['самара','москва','санкт-петербург','саратов'],
    loading: false,
    error: false
}

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case 'FETCH_DATA':
            return {
                ...state, data: action.payload
            }
        case 'SET_SELECTED_BANK_INDEX':
            return {
                ...state, selectedIndex: action.payload
            }
        case 'SET_ACTIVE_CITY':
            return {
                ...state, activeCity: action.payload
            }
        case 'START_LOADING':
            return {
                ...state, loading: true
            }
        case 'STOP_LOADING':
            return {
                ...state, loading: false
            }
        default:
            return state
    }
}

export default reducer