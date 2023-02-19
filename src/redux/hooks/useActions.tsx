import { bindActionCreators } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import {
	addComment,
	addMovieCard,
	setReviews,
	setMovies,
} from "../reducers/index";

const allActions = {
	...addComment,
	addMovieCard,
	setReviews,
	setMovies,
};

export const useActions = () => {
	const dispatch = useDispatch();
//@ts-ignore
	return bindActionCreators(allActions, dispatch);
};
