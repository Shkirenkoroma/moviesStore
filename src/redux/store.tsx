import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas/moviesSaga";
import { moviesReducer } from "./reducers/moviesSlice";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
	reducer: {
		movies: moviesReducer,
	},
	middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);
