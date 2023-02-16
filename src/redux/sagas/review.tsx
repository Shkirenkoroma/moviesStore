import { call, put, takeEvery } from "redux-saga/effects";
import { getApi, getReview } from "../../api";
import { GET_MOVIES, GET_REVIEWS } from "../constans";
import { setMovies } from "../actions";

export function* workerSagaReview() {
   console.log('вечер в хату')
	//@ts-ignore
	const data = yield call(getReview);
	console.log("hits in saga review", data);
}
export function* watchGetReview() {
	console.log('adada')
	yield takeEvery(GET_REVIEWS, workerSagaReview);
}

export default function* rootSaga() {
	
	yield watchGetReview();
	console.log('запуск второй саги')
}
