import {
	GET_MOVIES,
	GET_REVIEWS,
	SET_MOVIES,
	ADD_MOVIE_CARD,
   SET_REVIEWS,
   ADD_COMMENT,
} from "../constans";

export const getMovies = () => ({ type: GET_MOVIES });
export const setMovies = (payload: any) => ({ type: SET_MOVIES, payload });
export const addMovieCard = (payload: any) => ({ type: ADD_MOVIE_CARD, payload });
export const getAllReviews = (payload: any) => ({ type: GET_REVIEWS, payload });
export const setAllReviews = (payload: any) => ({ type: SET_REVIEWS, payload });
export const addReview = (payload: any) => ({ type: ADD_COMMENT, payload });
