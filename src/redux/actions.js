
const setSelectedBankIndex = (index) => {
    return {
        type: "SET_SELECTED_BANK_INDEX",
        payload: index
    }
}

const setZeroBankIndex = () => {
    return {
        type: "SET_ZERO_BANK_INDEX"
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
    stopLoading,
    startLoading,
    setActiveCity,
    setZeroBankIndex
}