import { createStore, applyMiddleware, combineReducers } from "redux";
import createSagaMiddleware from "redux-saga";
import { moviesReducer } from "./reducers/index";
import moviesData from "./reducers/moviesdata";
import  rootSaga from "./sagas/index";
import { composeWithDevTools } from "redux-devtools-extension";
import { watchGetReview } from "./sagas/review";





const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
	moviesReducer,
	moviesData,
});

export const store = createStore(
	rootReducer,
	composeWithDevTools(applyMiddleware(sagaMiddleware)),
);

sagaMiddleware.run(rootSaga);
