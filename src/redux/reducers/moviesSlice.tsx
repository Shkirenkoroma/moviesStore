import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { loginData } from "common/utils";
import moment from "moment";
import "moment/locale/en-gb";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    login: "",
    password: "",
    status: "idle",
    errors: "",
    data: {},
    reviews: [],
    movies: [],
    isLoading: false,
    movieId: 0,
  },
  reducers: {
    inputLogin: (state, action:PayloadAction<string>) => {
      state.login = action.payload;
    },
    inputPassword: (state, action:PayloadAction<string>) => {
      state.password = action.payload
    },
    addComment: (state: any, action) => {
      console.log('action', action.payload)
      const {login, comment} = action.payload;
        state.reviews.push({
        username: login,
        date: moment().locale("en-gb").format("LL"),
        content: comment,
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
      if (state.isLoading === false) {
        state.isLoading = true;
      } else state.isLoading = false;
    },
    setMovies: (state, action) => {
      state.movies = action.payload;
    },
    getFailure: (state, action:PayloadAction<string>) => {
      state.errors = action.payload
    },
    setStatus: (state, action:PayloadAction<string>) => {
      state.status = action.payload
    }
  },
});

export const moviesReducer = moviesSlice.reducer;
export const { inputLogin, inputPassword, addComment, addMovieCard, setReviews, getMovies, getItemId, setMovies, getFailure, setStatus } = moviesSlice.actions;
