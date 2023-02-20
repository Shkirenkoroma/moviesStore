import { createSlice } from "@reduxjs/toolkit";
import moment from "moment";
import "moment/locale/en-gb";
import { loginData } from "../../common/utils/utils";

const moviesSlice = createSlice({
	name: "movies",
	initialState: {
		status: "'idle",
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
