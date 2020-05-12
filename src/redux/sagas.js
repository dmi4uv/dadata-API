import {takeEvery,put,call,select} from  'redux-saga/effects'
import {setZeroBankIndex, startLoading, stopLoading} from "./actions";
import Axios from "axios";

export function* sagaWatcher() {
   yield takeEvery("SET_ACTIVE_CITY", workerSaga)
}

function* workerSaga() {
   yield put(startLoading())
   yield put(setZeroBankIndex())
   try {
      const response = yield call(getAxiosData)
      const result = response.data.suggestions
      yield put({type: "REQUEST_DATA_SUCCESS", payload: result})
      yield put(stopLoading())
  } catch (e) {
      console.log(e)
   }
}

function* getAxiosData () {

   const city = yield select((state)=>state.activeCity)

   return yield Axios.post(
          'https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/bank',
          {"query": city , "count": 20},{
             headers: {"Authorization": "Token 35fb812dea47683ebc59245b3a4d30b6966735ef",
                'Content-Type': 'application/json',
                'Accept': 'application/json'}})
   }
