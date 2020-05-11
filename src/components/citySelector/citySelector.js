import React from "react";
import {connect} from "react-redux"
import {setActiveCity,getAxiosData} from "../../redux/actions"

const CitySelector = (props) => {

    const setCity = (event) =>{
        props.getAxiosData(event.target.value)
    }

    return (
        <select onChange={setCity}>
            {props.cities.map((item,index)=>{return <option key={index}>{item}</option>})}
        </select>
    )
}

const mapDispatchToProps = {
    setActiveCity,
    getAxiosData
}

const mapStateToProps = state => {
    return {
        cities: state.cities,
        activeCity: state.activeCity
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CitySelector)