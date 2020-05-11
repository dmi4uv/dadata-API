import React from "react";
import {useSelector} from "react-redux";

export default () => {
    const data = useSelector(state => state.data)
    const index = useSelector(state => state.selectedIndex)
    return (
        <div>
            <div>
                <p>Название: {data[index].value?data[index].value:0}</p>
            </div>
            <div>
                <p>БИК: {data[index].data.bic}</p>
            </div>
            <div>
                <p>ИНН: {data[index].data.inn}</p>
            </div>
            <div>
                <p>КПП: {data[index].data.kpp}</p>
            </div>
        </div>

    )
}
