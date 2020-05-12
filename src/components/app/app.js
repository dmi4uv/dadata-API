import React, {Fragment} from "react";
import { connect } from 'react-redux'
import CitySelector from '../citySelector/citySelector'
import BankSelector from "../bankSelector/bankSelector";
import Loader from '../loader/loader'
import BankInfo from "../bankInfo/bankInfo";

const App = props => {
      return (
            <Fragment>
                  <CitySelector/>
                  {
                      (props.data.length===0)?
                          null
                          :props.loading?
                              <Loader/>
                              :<Fragment>
                                    <BankSelector/>
                                    {props.data.length===0?null:<BankInfo/>}
                               </Fragment>
                  }

            </Fragment>
      )
}

const mapStateToProps = state => {
    return {
        data: state.data,
        loading: state.loading,
        selectedIndex: state.selectedIndex
    }
}

export default connect(mapStateToProps, null)(App)