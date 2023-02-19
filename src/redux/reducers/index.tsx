import { createSlice } from "@reduxjs/toolkit";
import moment from "moment";
import "moment/locale/en-gb";

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
		movieId: 0,
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
		getItemId: (state) => {
			state.isLoading = true;
		},
		setReviews: (state, action) => {
			//@ts-ignore
			state.reviews = action.payload;
		},
		getMovies: (state) => {
			state.isLoading = true;
		},
		setMovies: (state, action) => {
			//@ts-ignore
			state.movies = action.payload;
		},
	},
});

export const moviesReducer = moviesSlice.reducer;
export const {
	addComment,
	addMovieCard,
	setReviews,
	getMovies,
	getItemId,
	setMovies,
} = moviesSlice.actions;

