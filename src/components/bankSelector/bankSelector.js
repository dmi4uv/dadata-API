import React, {Fragment} from "react";
import {useDispatch, useSelector} from 'react-redux'
import {setSelectedBankIndex} from "../../redux/actions";

export default () => {

    const dispatch = useDispatch()
    const data = useSelector(state => state.data)
    const setIndex = (event) => {
        dispatch(setSelectedBankIndex(event.target.selectedIndex))
    }

    return (
        <div className="jc">
            <span>Название банка:</span>
            <select onChange={setIndex}>
                {data.map((item,index)=> {
                    return  <option key={index}>{item.value}</option>
                })}
            </select>
        </div>
    )
}
