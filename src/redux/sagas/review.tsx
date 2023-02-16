import { call, put, takeEvery } from "redux-saga/effects";
import { getReview } from "../../api";
import { GET_REVIEWS } from "../constans";
// import { setMovies } from "../actions";

export function* workerSaga() {
   //@ts-ignore
	const  data = yield call(getReview);
   console.log('hits in saga', data)
	// yield put(setMovies(data));
}
export function* watchClickSaga() {
   yield takeEvery(GET_REVIEWS, workerSaga);
}

export default function* rootSaga() {
   yield watchClickSaga();
}

