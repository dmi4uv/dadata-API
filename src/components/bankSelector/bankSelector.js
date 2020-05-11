import React, {Fragment} from "react";
import {connect} from 'react-redux'
import {setSelectedBankIndex} from "../../redux/actions";

const BankSelector = ({data,setSelectedBankIndex}) => {

    const setIndex = (event) => {
        setSelectedBankIndex(event.target.selectedIndex)
    }

    return (
        <Fragment>
            <select onChange={setIndex}>
                {data.map((item,index)=> {
                    return  <option key={index}>{item.value}</option>
                })}
            </select>
        </Fragment>
    )
}

const mapStateToProps = state => {
    return {
        data: state.data
    }
}
const mapDispatchToProps = {
    setSelectedBankIndex
}

export default connect (mapStateToProps,mapDispatchToProps)(BankSelector)