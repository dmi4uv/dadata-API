import React from "react";
import {setSelectedBankIndex} from "../../redux/actions";
import {connect} from "react-redux";

 const BankInfo = ({data = 0,index = 0}) => {
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

const mapStateToProps = state => {
    return {
        data: state.data,
        index: state.selectedIndex
    }
}
const mapDispatchToProps = {
    setSelectedBankIndex
}

export default connect (mapStateToProps,null)(BankInfo)