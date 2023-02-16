import { GET_MOVIES, GET_REVIEWS } from "../constans";
import { SET_MOVIES } from "../constans";
import { ADD_MOVIE_CARD } from "../constans";

export const getMovies = () => ({ type: GET_MOVIES });
export const setMovies = (payload: any) => ({ type: SET_MOVIES, payload });
export const addMovieCard = (payload: any) => ({ type: ADD_MOVIE_CARD, payload });
export const getAllreviews = () => ({ type: GET_REVIEWS });
