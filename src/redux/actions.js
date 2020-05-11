import Axios from "axios";

const getAxiosData = (city) => {
    return async dispatch =>{
        const result = await Axios.post(
            'https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/bank',
            {"query": city, "count": 20},{
            headers: {"Authorization": "Token 35fb812dea47683ebc59245b3a4d30b6966735ef",
                'Content-Type': 'application/json',
                'Accept': 'application/json'}})
        console.log(result)
        dispatch({type: "FETCH_DATA", payload: result.data.suggestions})
    }
}

const setSelectedBankIndex = (index) => {
    return {
        type: "SET_SELECTED_BANK_INDEX",
        payload: index
    }
}
const setActiveCity = (city) => {
    return {
        type: "SET_ACTIVE_CITY",
        payload: city
    }
}

const startLoading = () => {
    return {
        type: "START_LOADING"
    }
}
const stopLoading = () => {
    return {
        type: "STOP_LOADING"
    }
}

export {

    setSelectedBankIndex,
    getAxiosData,
    stopLoading,
    startLoading,
    setActiveCity
}