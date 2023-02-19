import { call, put, takeEvery } from "redux-saga/effects";
import { getReview } from "../../api";
import { setAllReviews } from "../actions";
import { setReviews } from "../reducers";


export function* workerSagaReview(action:any) {
	//@ts-ignore
	const data = yield call(()=>getReview(action.payload));
	console.log("hits in saga review", data);
	yield put(setAllReviews(data));
}
export function* watchGetReview() {
	yield takeEvery(setReviews, workerSagaReview);
}
