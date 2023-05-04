import { all } from "redux-saga/effects";
import { watchClickSaga } from "./moviesSaga";
import { watchGetReview } from "./reviewSaga";

export default function* rootSaga() {
	yield all([watchClickSaga(), watchGetReview()]);
}