
const  initialState = {
    data: [1,2],
    cities: ['самара','москва','санкт-петербург','саратов'],
    activeCity: 'самара',
    loading: false,
    error: false
}

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case 'FETCH_DATA':
            return {
                ...state, data: action.payload
            }
        case 'SET_ACTIVE_CITY':
            return {
                 ...state, activeCity: action.payload
            }
        case 'SET_SELECTED_BANK_INDEX':
            return {
                ...state, selectedIndex: action.payload
            }
        default:
            return state
    }
}

export default reducer