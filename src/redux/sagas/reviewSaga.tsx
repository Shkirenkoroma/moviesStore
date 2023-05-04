import { getReview } from "common/api/helpers";
import { call, put, takeEvery } from "redux-saga/effects";
import { ResponseGenerator } from "types";
import { getFailure, setReviews, setStatus } from "../reducers/moviesSlice";

export function* workerSagaReview(action: any) {
	try {
		yield put(setStatus("loading"));
		const data: ResponseGenerator = yield call(() => getReview(action.payload));
		yield put(setReviews(data));
		yield put(setStatus("loaded"));
	} catch (error) {
		yield put(getFailure("error"));
		yield put(setStatus("failed"));
	}
}
export function* watchGetReview() {
	yield takeEvery("movies/getItemId", workerSagaReview);
}
