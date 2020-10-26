
const  initialState = {
    data: [],
    cities: ['Москва','Санкт-петербург','Екатеринбург','Самара','Саратов','Казань','Уфа'],
    loading: false,
    error: false,
    activeCity: 'Москва'
}

const reducer = (state = initialState, action) => {

    switch (action.type) {

        case 'REQUEST_DATA_SUCCESS':
            return {
                ...state, data: action.payload
            }
        case 'SET_SELECTED_BANK_INDEX':
            return {
                ...state, selectedIndex: action.payload
            }
        case 'SET_ZERO_BANK_INDEX':
            return {
                ...state, selectedIndex: 0
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