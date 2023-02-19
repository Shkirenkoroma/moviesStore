import { all, call, put, takeEvery } from "redux-saga/effects";
import { getMoviesArray, getReview } from "../../api";
import {  setMovies, setReviews } from "../reducers";
import { watchGetReview } from "./review";

export function* workerSaga() {
	//@ts-ignore
	const data = yield call(getMoviesArray);
	console.log('data', data)
	yield put(setMovies(data));
}

export function* watchClickSaga() {
	console.log('запускаем вотчер')
	yield takeEvery('movies/getMovies', workerSaga);
}

export default function* rootSaga() {
	yield all([watchClickSaga(), watchGetReview()]) ;
}
