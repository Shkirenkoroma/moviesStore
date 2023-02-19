import { all, call, put, takeEvery } from "redux-saga/effects";
import { getMoviesArray, getReview } from "../../api";
import {  setMovies, setReviews } from "../reducers";
import { watchGetReview } from "./review";

export function* workerSaga() {
	//@ts-ignore
	const data = yield call(getMoviesArrayss);
	yield put(setMovies(data));
}

export function* watchClickSaga() {
	yield takeEvery('movies/getMovies', workerSaga);
}

export default function* rootSaga() {
	yield all([watchClickSaga(), watchGetReview()]) ;
}
