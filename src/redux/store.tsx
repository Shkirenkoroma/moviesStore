import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { moviesReducer } from "./reducers/moviesSlice";
import rootSaga from "./sagas/rootSaga";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
	reducer: {
		movies: moviesReducer,
	},
	middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);
