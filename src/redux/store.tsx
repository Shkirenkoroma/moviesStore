import {  applyMiddleware} from "redux";
import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from "redux-saga";
import  rootSaga from "./sagas/index";
import { composeWithDevTools } from "redux-devtools-extension";
import { moviesReducer } from "./reducers";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
	reducer: {
		movies: moviesReducer
	},
		middleware: [sagaMiddleware]
	// composeWithDevTools(applyMiddleware(sagaMiddleware)),
});

sagaMiddleware.run(rootSaga);
