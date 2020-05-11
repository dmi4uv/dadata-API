import React, {Component} from "react";
import { connect } from 'react-redux'
import CitySelector from '../citySelector/citySelector'
import {dataLoaded} from "../../redux/actions";
import BankSelector from "../bankSelector/bankSelector";
import Loader from '../loader/loader'
import BankInfo from "../bankInfo/bankInfo";

const App = (props) => {
      return (
            <div>
              <CitySelector/>
              {props.loading?<Loader/>:<BankSelector/>}
                {!(props.selectedIndex==null)?<BankInfo/>:null}
            </div>
      )
}

const mapStateToProps = state => {
    return {
        data: state.data,
        loading: state.loading,
        selectedIndex: state.selectedIndex
    }
}

const mapDispatchToProps = {
    dataLoaded
}


export default connect(mapStateToProps, mapDispatchToProps)(App)