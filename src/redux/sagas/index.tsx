import { all, call, put, takeEvery } from "redux-saga/effects";
import { getMovies, getReview } from "../../api";
import { GET_MOVIES, GET_REVIEWS } from "../constans";
import { setMovies } from "../actions";
import { watchGetReview } from "./review";

export function* workerSaga() {
	//@ts-ignore
	const data = yield call(getMovies);
	yield put(setMovies(data));
}

export function* watchClickSaga() {
	yield takeEvery(GET_MOVIES, workerSaga);
}

export default function* rootSaga() {
	yield all([watchClickSaga(), watchGetReview()]) ;
}
