import {takeEvery,put,call} from  'redux-saga/effects'
import {FETCH_DATA} from "./types";

export function* sagaWatcher() {
   yield takeEvery(FETCH_DATA, sagaWorker)
}

function* sagaWorker() {
    yield put()
}