import { call, put, takeEvery } from "redux-saga/effects";
import { getReview } from "../../common/api/helpers";
import { getFailure, setReviews, setStatus } from "../reducers/moviesSlice";

export function* workerSagaReview(action: any) {
	try {
		yield put(setStatus("loading"));
		//@ts-ignore
		const data = yield call(() => getReview(action.payload));
		yield put(setReviews(data));
		yield put(setStatus("loaded"));
	} catch (error) {
		yield put(getFailure(error));
		yield put(setStatus("failed"));
	}
}
export function* watchGetReview() {
	yield takeEvery("movies/getItemId", workerSagaReview);
}
