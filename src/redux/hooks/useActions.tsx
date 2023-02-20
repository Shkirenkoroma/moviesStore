import { bindActionCreators } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { addComment, addMovieCard, setReviews, setMovies, getMovies } from "../reducers/moviesSlice";

const allActions:any = {
	...addComment,
	addMovieCard,
	setReviews,
	setMovies,
	getMovies
};

export const useActions = () => {
	const dispatch = useDispatch();
	return bindActionCreators(allActions, dispatch);
};
