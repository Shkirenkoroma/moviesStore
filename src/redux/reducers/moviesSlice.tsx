import { createSlice } from "@reduxjs/toolkit";
import { loginData } from "common/utils";
import moment from "moment";
import "moment/locale/en-gb";

const moviesSlice = createSlice({
	name: "movies",
	initialState: {
		status: "idle",
		errors: "",
		data: {},
		reviews: [],
		movies: [],
		isLoading: false,
		movieId: 0,
	},
	reducers: {
		addComment: (state: any, action) => {
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
			state.reviews = action.payload;
		},
		getMovies: (state) => {
			state.isLoading = true;
		},
		setMovies: (state, action) => {
			state.movies = action.payload;
		},
		getFailure:(state, action) => {
			state.errors = action.payload
		},
		setStatus:(state, action) => {
			state.status = action.payload
		}
	},
});

export const moviesReducer = moviesSlice.reducer;
export const { addComment, addMovieCard, setReviews, getMovies, getItemId, setMovies, getFailure, setStatus } = moviesSlice.actions;
