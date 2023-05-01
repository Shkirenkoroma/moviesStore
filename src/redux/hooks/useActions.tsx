import { bindActionCreators } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { inputLogin, inputPassword, addComment, addMovieCard, setReviews, setMovies, getMovies } from "../reducers/moviesSlice";

const allActions: any = {
  ...addComment,
  addMovieCard,
  setReviews,
  setMovies,
  getMovies,
  inputLogin,
  inputPassword,
};

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(allActions, dispatch);
};
