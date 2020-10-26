import React from "react";
import {useSelector} from "react-redux";
import './bankInfo.css'

export default () => {
    const data = useSelector(state => state.data)
    const index = useSelector(state => state.selectedIndex)
    return (
        <div className="bankInfo">
            <div>
                <p>Название: {data[index].value?data[index].value:0}</p>
            </div>
            <div>
                <p>БИК: {data[index].data.bic?data[index].data.bic:'Нет информации'}</p>
            </div>
            <div>
                <p>ИНН: {data[index].data.inn?data[index].data.inn:'Нет информации'}</p>
            </div>
            <div>
                <p>КПП: {data[index].data.kpp?data[index].data.kpp:'Нет информации'}</p>
            </div>
        </div>

    )
}
