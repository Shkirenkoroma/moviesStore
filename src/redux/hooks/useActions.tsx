import { bindActionCreators } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { addComment, addMovieCard, setReviews, setMovies, getMovies } from "../reducers/moviesSlice";

const allActions = {
	...addComment,
	addMovieCard,
	setReviews,
	setMovies,
	getMovies
};

export const useActions = () => {
	const dispatch = useDispatch();
//@ts-ignore
	return bindActionCreators(allActions, dispatch);
};
