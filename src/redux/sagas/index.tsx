import { call, put, takeEvery } from "redux-saga/effects";
import { getApi, getReview } from "../../api";
import { GET_MOVIES, GET_REVIEWS } from "../constans";
import { setMovies } from "../actions";

// export function* workerSaga() {
// 	//@ts-ignore
// 	const data = yield call(getApi);
// 	console.log("hits in saga", data);
// 	yield put(setMovies(data));
// }

// export function* watchClickSaga() {
// 	yield takeEvery(GET_MOVIES, workerSaga);
// }



// export default function* rootSaga() {
// 	yield watchClickSaga();
// }
