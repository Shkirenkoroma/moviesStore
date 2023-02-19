import { all, call, put, takeEvery } from "redux-saga/effects";
import { getMovies, getReview } from "../../api";
import { setMovies, setReviews } from "../reducers";
import { watchGetReview } from "./review";

export function* workerSaga() {
	//@ts-ignore
	const data = yield call(getMovies);
	console.log('data', data)
	yield put(setMovies(data));
}

export function* watchClickSaga() {
	console.log('запускаем вотчер')
	//@ts-ignore
	yield takeEvery(setReviews, workerSaga);
}

export default function* rootSaga() {
	yield all([watchClickSaga(), watchGetReview()]) ;
}
