import {takeEvery,put,call} from  'redux-saga/effects'
import {SET_ACTIVE_CITY} from "./types";
import {getAxiosData, startLoading, stopLoading} from "./actions";


export function* sagaWatcher() {
   yield takeEvery(SET_ACTIVE_CITY, sagaWorker)
}

function* sagaWorker() {
 /* yield put(startLoading())
   yield put(getAxiosData())
    yield put(stopLoading())*/

}
