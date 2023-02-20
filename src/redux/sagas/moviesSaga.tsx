import { getMoviesArray } from "common/api/helpers";
import { all, call, put, takeEvery } from "redux-saga/effects";
import { ResponseGenerator } from "types";
import { setMovies, getFailure, setStatus } from "../reducers/moviesSlice";
import { watchGetReview } from "./reviewSaga";

export function* workerSaga() {
	try {
		yield put(setStatus("loading"));
		const data: ResponseGenerator = yield call(getMoviesArray);
		yield put(setMovies(data));
		yield put(setStatus("loaded"));
	} catch (error) {
		yield put(getFailure(error));
		yield put(setStatus("failed"));
	}
}

export function* watchClickSaga() {
	yield takeEvery("movies/getMovies", workerSaga);
}

export default function* rootSaga() {
	yield all([watchClickSaga(), watchGetReview()]);
}
