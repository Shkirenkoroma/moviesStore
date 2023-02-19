import { createSlice } from "@reduxjs/toolkit";
import moment from "moment";
import "moment/locale/en-gb";

// const coordinatesSlice = createSlice({
// 	name: "coordinates",
// 	initialState: initialCoordinates,
// 	reducers: {
// 		addCoordinate: (state, action) => {
// 			state.push(action.payload);
// 		},
// 		removeCoordinate: (state, action) => {
// 			return state.filter((item) => item.id !== action.payload);
// 		},
// 	},
// });

const loginData = JSON.parse(localStorage.getItem("user") || "{}");

const moviesSlice = createSlice({
	name: "movies",
	initialState: {
		status: "",
		errors: "",
		data: {},
		reviews: [],
		movies: [],
		isLoading: false,
	},
	reducers: {
		addComment: (state, action) => {
			//@ts-ignore
			state.reviews.push({
				username: loginData.email,
				date: moment().locale("en-gb").format("LL"),
				content: action.payload,
			});
		},
		addMovieCard: (state, action) => {
			state.data = action.payload;
		},
		setReviews: (state, action) => {
			//@ts-ignore
			state.reviews.push(action.payload);
		},
		getMovies: (state) => {
			state.isLoading = true;
		},
		setMovies: (state, action) => {
			console.log("action.payload in setMovies", action.payload);
			//@ts-ignore
			state.movies = action.payload ;
		},
	},
});

export const moviesReducer = moviesSlice.reducer;
export const { addComment, addMovieCard, setReviews, getMovies, setMovies } =
	moviesSlice.actions;

// export const moviesReducer = (state = initialState, action: any) => {
// 	switch (action.type) {
// 		case "ADD_COMMENT":
// 			return {
// 				...state,
// 				reviews: [
// 					...state.reviews,
// 					{
// 						username: loginData.email,
// 						date: moment().locale("en-gb").format("LL"),
// 						content: action.payload,
// 					},
// 				],
// 			};
// 		case "ADD_MOVIE_CARD":
// 			return { ...state, data: { ...state.data, ...action.payload } };
// 		case "SET_REVIEWS":
// 			return { ...state, reviews: action.payload };
// 		case "SET_MOVIES":
// 			return {
// 				...state,
// 				movies: [...state.movies, ...action.payload],
// 			};
// 		default:
// 			return state;
// 	}
// };
